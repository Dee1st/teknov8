# Use Python 3.11 slim image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose port (Render will set PORT env variable)
EXPOSE 10000

# Start the application with gunicorn
CMD gunicorn --bind 0.0.0.0:$PORT app:app
