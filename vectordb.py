# vectordb_build.py
import os
from langchain.document_loaders import DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.vectorstores import FAISS

# 1️⃣ Load your documents (PDFs or text files in 'docs' folder)
loader = DirectoryLoader("docs", glob="**/*.pdf")  # Change to "*.txt" if using text files
documents = loader.load()

# 2️⃣ Split documents into chunks
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
docs = text_splitter.split_documents(documents)

# 3️⃣ Create embeddings
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# 4️⃣ Create FAISS vectorstore
vectorstore = FAISS.from_documents(docs, embeddings)

# 5️⃣ Save it locally
if not os.path.exists("vectorstore"):
    os.makedirs("vectorstore")
vectorstore.save_local("vectorstore")

print("Vectorstore built successfully!")
