# Software Developer Portfolio

A modern, responsive portfolio website for a software developer using Flask (backend) and React with Tailwind CSS (frontend).

## Project Structure

```
portfolio-website/
├── backend/                # Flask backend
│   ├── venv/              # Python virtual environment
│   ├── app.py             # Flask application
│   └── requirements.txt   # Python dependencies
│
└── frontend/              # React frontend
    ├── src/               # React source files
    │   ├── components/    # UI components
    │   ├── pages/         # Page components
    │   └── assets/        # Static assets
    ├── public/            # Public assets
    └── package.json       # Node.js dependencies
```

## Prerequisites

- Python 3.8+
- Node.js 14+
- npm or yarn

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create and activate a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```

3. Install the dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask development server:
   ```
   python app.py
   ```

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Customizing the Portfolio

1. **Personal Information**: Update your personal information in the Flask API endpoints in `backend/app.py`.

2. **Projects**: Add or modify your projects in the API endpoint or directly in the Projects component.

3. **Styling**: The website uses Tailwind CSS for styling. You can modify the theme in `frontend/tailwind.config.js`.

4. **Content**: Update the content in the page components located in `frontend/src/pages`.

## Deployment

### Backend (Flask)

1. For production, you can use Gunicorn to serve the Flask application:
   ```
   gunicorn app:app
   ```

2. For platforms like Heroku, create a `Procfile` in the backend directory:
   ```
   web: gunicorn app:app
   ```

### Frontend (React)

1. Build the production version of the frontend:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory, which can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE). 