# Blogging Platform

A full-stack blogging platform built with React, Node.js, and MongoDB. Features include user authentication, blog management, social interactions, and an admin panel.

## 🚀 Features

### User Authentication
- User registration and login
- Password reset via email
- JWT token-based authentication
- User profile management

### Blog Management
- Create, edit, and delete blog posts
- Rich text editor with formatting options
- Draft and published post states
- Categories and tags support
- Featured images for posts

### Social Features
- Like/unlike posts and comments
- Comment system with nested replies
- Follow/unfollow users
- User activity feed
- Social media sharing

### Admin Panel
- User management
- Content moderation
- Analytics dashboard
- Post and comment management

### Responsive Design
- Mobile-first approach
- Modern UI with Tailwind CSS
- Smooth animations and transitions
- Cross-browser compatibility

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email service
- **Multer** - File uploads

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **React Query** - Data fetching
- **Tailwind CSS** - Styling
- **React Hook Form** - Form handling
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd blogging-platform
```

### 2. Install dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Setup

#### Server Environment
Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/blogging-platform

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Client Environment
Create a `.env` file in the `client` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Database Setup
Make sure MongoDB is running on your system. The application will automatically create the necessary collections.

### 5. Start the application

#### Development Mode
```bash
# From the root directory
npm run dev
```

This will start both the server (port 5000) and client (port 3000) concurrently.

#### Production Mode
```bash
# Build the client
cd client
npm run build

# Start the server
cd ../server
npm start
```

## 🏃‍♂️ Running the Application

### Development
1. Start MongoDB service
2. Run `npm run dev` from the root directory
3. Open http://localhost:3000 in your browser

### Production
1. Build the client: `cd client && npm run build`
2. Start the server: `cd server && npm start`
3. The application will be available on the configured port

## 📚 API Documentation

### Authentication Endpoints

#### POST /api/auth/register
Register a new user
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### POST /api/auth/login
Login user
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### POST /api/auth/forgot-password
Request password reset
```json
{
  "email": "john@example.com"
}
```

### Posts Endpoints

#### GET /api/posts
Get all published posts with pagination and filters
```
Query Parameters:
- page: number
- limit: number
- search: string
- category: string
- author: string
- sortBy: string
- sortOrder: 'asc' | 'desc'
```

#### POST /api/posts
Create a new post (requires authentication)
```json
{
  "title": "My Blog Post",
  "content": "Post content...",
  "category": "Technology",
  "tags": ["react", "javascript"],
  "status": "draft"
}
```

#### PUT /api/posts/:id
Update a post (requires authentication)
```json
{
  "title": "Updated Title",
  "content": "Updated content...",
  "status": "published"
}
```

### Users Endpoints

#### GET /api/users
Get all users with search and pagination
```
Query Parameters:
- page: number
- limit: number
- search: string
```

#### POST /api/users/:id/follow
Follow a user (requires authentication)

#### DELETE /api/users/:id/follow
Unfollow a user (requires authentication)

### Comments Endpoints

#### GET /api/comments/post/:postId
Get comments for a post
```
Query Parameters:
- page: number
- limit: number
```

#### POST /api/comments
Create a comment (requires authentication)
```json
{
  "content": "Great post!",
  "postId": "post_id",
  "parentCommentId": "parent_comment_id" // optional
}
```

## 🎨 UI Components

The application includes reusable UI components:

- **Button** - Various button styles and sizes
- **Input** - Form inputs with validation
- **Card** - Content containers
- **Modal** - Overlay dialogs
- **Avatar** - User profile images
- **LoadingSpinner** - Loading indicators
- **Badge** - Status indicators

## 🔧 Configuration

### Server Configuration
- **Port**: Configured via `PORT` environment variable
- **Database**: MongoDB connection string
- **JWT**: Secret key and expiration time
- **Email**: SMTP settings for password reset
- **File Upload**: Maximum file size and upload path

### Client Configuration
- **API URL**: Backend API endpoint
- **Environment**: Development/production modes

## 🚀 Deployment

### Heroku Deployment

1. **Create Heroku app**
```bash
heroku create your-blog-app
```

2. **Set environment variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-jwt-secret
heroku config:set EMAIL_HOST=your-smtp-host
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-email-password
```

3. **Deploy**
```bash
git push heroku main
```

### AWS Deployment

1. **EC2 Instance Setup**
   - Launch Ubuntu instance
   - Install Node.js and MongoDB
   - Configure security groups

2. **Application Deployment**
   - Clone repository
   - Install dependencies
   - Build client application
   - Start server with PM2

3. **Domain Configuration**
   - Configure domain with Route 53
   - Set up SSL certificate
   - Configure Nginx reverse proxy

### Docker Deployment

1. **Build Docker image**
```bash
docker build -t blogging-platform .
```

2. **Run container**
```bash
docker run -p 3000:3000 -p 5000:5000 blogging-platform
```

## 🧪 Testing

### Backend Testing
```bash
cd server
npm test
```

### Frontend Testing
```bash
cd client
npm test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates and Maintenance

### Regular Maintenance Tasks
- Update dependencies regularly
- Monitor security vulnerabilities
- Backup database regularly
- Monitor application performance

### Version Updates
- Follow semantic versioning
- Update changelog
- Test thoroughly before release
- Deploy during low-traffic periods

## 📊 Performance Optimization

### Backend Optimizations
- Database indexing
- Query optimization
- Caching strategies
- Rate limiting

### Frontend Optimizations
- Code splitting
- Lazy loading
- Image optimization
- Bundle size optimization

## 🔒 Security Considerations

- JWT token security
- Password hashing
- Input validation
- XSS protection
- CSRF protection
- Rate limiting
- Secure headers

## 📈 Monitoring and Analytics

- Application performance monitoring
- Error tracking
- User analytics
- Database monitoring
- Server health checks

---

**Happy Blogging! 🚀** 