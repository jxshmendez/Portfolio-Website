from flask import Flask, jsonify, redirect, url_for, render_template_string, request
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    # Simple HTML welcome page
    html = '''
    <!DOCTYPE html>
    <html>
    <head>
        <title>Portfolio API</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
            }
            h1 {
                color: #0284c7;
            }
            .endpoint {
                background-color: #f5f5f5;
                border-left: 4px solid #0284c7;
                padding: 10px 15px;
                margin-bottom: 10px;
                border-radius: 0 4px 4px 0;
            }
            code {
                background-color: #e0f2fe;
                padding: 2px 5px;
                border-radius: 3px;
            }
        </style>
    </head>
    <body>
        <h1>Software Developer Portfolio API</h1>
        <p>Welcome to the Portfolio API. Here are the available endpoints:</p>
        
        <div class="endpoint">
            <h3>GET /api/info</h3>
            <p>Returns information about the developer.</p>
            <p>Example: <code><a href="/api/info">/api/info</a></code></p>
        </div>
        
        <div class="endpoint">
            <h3>GET /api/projects</h3>
            <p>Returns a list of projects.</p>
            <p>Example: <code><a href="/api/projects">/api/projects</a></code></p>
        </div>
        
        <p>This is the backend API. The frontend application will consume these endpoints.</p>
    </body>
    </html>
    '''
    return render_template_string(html)

@app.route('/api/info', methods=['GET'])
def get_info():
    return jsonify({
        'name': 'Josh Mendez',
        'title': 'Software Engineer',
        'description': 'BEng Software Engineering graduate with a passion for developing innovative and user-friendly applications. Skilled in full-stack development with a focus on modern web technologies.',
        'skills': ['Python', 'JavaScript', 'React', 'Node.js', 'Flask', 'SQL', 'Git', 'Tailwind CSS', 'TypeScript']
    })

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify([
        {
            'id': 1,
            'title': 'E-Commerce Platform',
            'description': 'A full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.',
            'technologies': ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
            'github': 'https://github.com/joshmendez/ecommerce-platform',
            'live': 'https://ecommerce-demo.example.com',
            'image': 'ecommerce.jpg'
        },
        {
            'id': 2,
            'title': 'Task Management App',
            'description': 'A collaborative task management application with real-time updates, team spaces, and progress tracking.',
            'technologies': ['Vue.js', 'Firebase', 'Tailwind CSS'],
            'github': 'https://github.com/joshmendez/task-manager',
            'live': 'https://task-app.example.com',
            'image': 'task-app.jpg'
        },
        {
            'id': 3,
            'title': 'Portfolio Website',
            'description': 'A modern personal portfolio website showcasing projects and skills with clean, responsive design.',
            'technologies': ['React', 'Tailwind CSS', 'Flask', 'Framer Motion'],
            'github': 'https://github.com/joshmendez/portfolio',
            'live': 'https://joshmendez.dev',
            'image': 'portfolio.jpg'
        }
    ])

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Email configuration
        sender_email = os.getenv('EMAIL_USER')
        receiver_email = os.getenv('EMAIL_RECEIVER') or sender_email
        password = os.getenv('EMAIL_PASSWORD')
        
        if not all([sender_email, password]):
            return jsonify({'error': 'Email configuration is missing'}), 500
        
        # Create message
        subject = f"New Contact Form Submission from {data['name']}"
        body = f"""
        Name: {data['name']}
        Email: {data['email']}
        
        Message:
        {data['message']}
        """
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(sender_email, password)
            server.send_message(msg)
        
        return jsonify({'message': 'Message sent successfully!'}), 200
        
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return jsonify({'error': 'Failed to send message. Please try again later.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
