
# pip install docx2txt
# pip install PyPDF2
# pip install pdfreader
# pip install pdfminer


from wordcloud import WordCloud
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import CountVectorizer
import matplotlib.pyplot as plt
from nltk.probability import FreqDist
import io
from pdfminer.converter import TextConverter
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfpage import PDFPage

# Docx resume
import docx2txt

# Wordcloud
import re
import operator
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
set(stopwords.words('english'))


# ### Read PDF Resume

def read_pdf_resume(pdf_doc):
    resource_manager = PDFResourceManager()
    fake_file_handle = io.StringIO()
    converter = TextConverter(resource_manager, fake_file_handle)
    page_interpreter = PDFPageInterpreter(resource_manager, converter)

    with open(pdf_doc, 'rb') as fh:
        for page in PDFPage.get_pages(fh,
                                      caching=True,
                                      check_extractable=True):
            page_interpreter.process_page(page)

        text = fake_file_handle.getvalue()
        # print(text)

    # close open handles
    converter.close()
    fake_file_handle.close()

    if text:

        return text


def read_word_resume(word_doc):  # Reading a word file
    #resume = docx2txt.process(word_doc)
    #text = ''.join(resume)
    resume = docx2txt.process(word_doc)
    resume = str(resume)
    # print(resume)
    text = ''.join(resume)
    text = text.replace("\n", "")

    if text:
        return text


def clean_job_decsription(jd):
    ''' a function to create a word cloud based on the input text parameter'''
    # Clean the Text
    # Lower
    clean_jd = jd.lower()
    # remove punctuation
    clean_jd = re.sub(r'[^\w\s]', '', clean_jd)
    # remove trailing spaces
    clean_jd = clean_jd.strip()
    # remove numbers
    clean_jd = re.sub('[0-9]+', '', clean_jd)
    # tokenize
    clean_jd = word_tokenize(clean_jd)
    # remove stop words
    stop = stopwords.words('english')
    # stop.extend(["AT_USER","URL","rt","corona","coronavirus","covid","amp","new","th","along","icai","would","today","asks"])
    clean_jd = [w for w in clean_jd if not w in stop]

    return(clean_jd)


def create_word_cloud(jd):
    corpus = jd
    fdist = FreqDist(corpus)
    print(fdist.most_common(50))
    words = ' '.join(corpus)
    words = words.split()

    # create a empty dictionary
    data = dict()
    
    #  Get frequency for each words where word is the key and the count is the value
    for word in (words):
        word = word.lower()
        data[word] = data.get(word, 0) + 1
    # Sort the dictionary in reverse order to print first the most used terms
    dict(sorted(data.items(), key=operator.itemgetter(1), reverse=True))
    # print(data)
    word_cloud = WordCloud(width=800, height=800,
                           background_color='white', max_words=50)
    word_cloud.generate_from_frequencies(data)
    # plot the WordCloud image
    plt.figure(figsize=(10, 8), edgecolor='k')
    plt.imshow(word_cloud, interpolation='bilinear')
    plt.axis("off")
    plt.tight_layout(pad=0)
    plt.savefig('../Frontend_React/src/components/features/word_cloud.png')
    plt.show()
    
    plt.close()


def get_resume_score(text):
    cv = CountVectorizer(stop_words='english')
    count_matrix = cv.fit_transform(text)
    # Print the similarity scores
    print("\nSimilarity Scores:")
    # print(cosine_similarity(count_matrix))
    # get the match percentage
    matchPercentage = cosine_similarity(count_matrix)[0][1] * 100
    matchPercentage = round(matchPercentage, 2)  # round to two decimal
    result_matched = "Your resume matches about " + str(matchPercentage) + "% of the job description."

    return result_matched
    



def start_word_cloud():
    # print("slkdnfsdf")

    try:
        # extn = input("Enter File Extension: ")
        # print(extn)
        if "extn" == "docx":
            resume = read_word_resume('test_resume.docx')

        else:

            resume = read_pdf_resume(r'Uploaded_Resume/jatin_resume.pdf')

        # job_description = input("\nEnter the Job Description: ")
        job_description = "Instrumental in understanding the requirements and design ofthe product/ software Develop software solutions by studying information needs,studying systems flow, data usage and work processes Investigating problem areas followed by the software developmentlife cycle Facilitate root cause analysis of the system issues and problemstatement Identify ideas to improve system performance and impactavailability Analyze client requirements and convert requirements to feasibledesign Collaborate with functional teams or systems analysts who carryout the detailed investigation into software requirements Conferring with project managers to obtain information onsoftware capabilities Perform coding and ensure optimal software/ moduledevelopment Determine operational feasibility by evaluating analysis,problem definition, requirements, software development and proposedsoftware Develop and automate processes for software validation by setting up and designing test cases/scenarios/usage cases, andexecuting these cases Modifying software to fix errors, adapt it to new hardware,improve its performance, or upgrade interfaces. Analyzing information to recommend and plan the installation ofnew systems or modifications of an existing system Ensuring that code is error free or has no bugs and test failure Preparing reports on programming project specifications,activities and status Ensure all the codes are raised as per the norm defined forproject / program / account with clear description and replicationpatterns Compile timely, comprehensive and accurate documentation andreports as requested Coordinating with the team on daily project status and progressand documenting it Providing feedback on usability and serviceability, trace theresult to quality risk and report it to concerned stakeholders Status Reporting and Customer Focus on an ongoing basis withrespect to project and its execution Capturing all the requirements and clarifications from theclient for better quality work Taking feedback on the regular basis to ensure smooth and ontime delivery Participating in continuing education and training to remaincurrent on best practices, learn new programming languages, and betterassist other team members. Consulting with engineering staff to evaluate software-hardwareinterfaces and develop specifications and performance requirements Document and demonstrate solutions by developing documentation,flowcharts, layouts, diagrams, charts, code comments and clear code Documenting very necessary details and reports in a formal wayfor proper understanding of software from client proposal toimplementation Ensure good quality of interaction with customer w.r.t. e-mailcontent, fault report tracking, voice calls, business etiquette etc Timely Response to customer requests and no instances ofcomplaints either internally or externally"

        # Get a Keywords Cloud
        clean_jd = clean_job_decsription(job_description)
        create_word_cloud(clean_jd)

        text = [resume, job_description]

        # Get a Match
        result_matched= get_resume_score(text)

        return result_matched

    except Exception as e:
        print(e)


# start_word_cloud()
