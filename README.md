
# BeyondChats - Chatbot Setup Workflow

BeyondChats is a chatbot company that provides an intuitive and user-friendly platform for businesses to set up and integrate chatbots into their websites. This project implements a step-by-step UI/UX workflow for setting up a new chatbot, including user registration, organisation setup, website scraping, chatbot training, and integration.

## Key Features
1. **User Registration**:
   - Users can sign up using their email and password or "Continue with Google."
   - Email verification ensures genuine registrations.

2. **Organisation Setup**:
   - Users can enter company details (name, website URL, description).
   - Auto-fetch meta description from the website URL (optional).

3. **Website Scraping**:
   - Backend server scrapes the client's website to auto-train the chatbot.
   - UI displays detected webpages, scraping progress, and scraped data chunks.

4. **Chatbot Integration & Testing**:
   - Test the chatbot on the client's website with a dummy integration.
   - Easy-to-follow instructions for integrating the chatbot into the client's website.
   - Test integration and receive success or failure feedback.

5. **Admin Panel & Social Sharing**:
   - Explore the admin panel to manage the chatbot.
   - Share the chatbot integration success on social media.

## Technologies Used
- **Frontend**: React (latest version), React Router for navigation.
- **Backend**: ASP.NET Core (for scraping and chatbot training).
- **Deployment**: IIS (Internet Information Services) for hosting.

## Getting Started
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/beyondchats-ui.git
   cd beyondchats-ui
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Deploy to IIS**:
   - Publish the ASP.NET Core backend:
     ```bash
     dotnet publish -c Release -o ./publish
     ```
   - Configure IIS to host the application.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This `README.md` provides a clear and concise overview of your project, making it easy for users and developers to understand its purpose and functionality. Let me know if you need further customization!