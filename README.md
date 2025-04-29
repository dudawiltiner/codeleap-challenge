# Codeleap Challenge 🤖

Welcome to the Codeleap Challenge! A modern web application responsive that demonstrates the integration of AI-powered content generation using OpenAI's GPT models.

## 🌟 Key Features

- 📝 **Content Generation**: Generate structured articles using AI
- 🎯 **Markdown Support**: Content is automatically formatted in Markdown
- 🔄 **Real-time Generation**: Instant content generation based on user input
- 🛡️ **Error Handling**: Robust error management and user feedback

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/codeleap-challenge.git
cd codeleap-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

5. To run tests:

```bash
npm run cy:run:component
```

### Environment Variables

1. Create a `.env` file in the root directory with the following variables:

```bash
# OpenAI API Key for content generation
NEXT_PUBLIC_API_BASE_URL=url
NEXT_PUBLIC_OPENAI_API_KEY=your_api_key_here
```

2. How to obtain the API key:
   - **NEXT_PUBLIC_OPENAI_API_KEY**: Get it from [OpenAI Platform](https://platform.openai.com/api-keys)

> ⚠️ **Important**: Never share your API keys or include them in version control.

## 📁 Project Structure

```
src/
├── app/                    # Next.js routes and pages
├── components/
│   ├── atoms/             # Basic components (Button, Input, etc.)
│   ├── molecules/         # Atom compositions (Card, Dialog, etc.)
│   ├── organisms/         # Complex components (ContentEditor, etc.)
│   └── ui/                # Base shadcn/ui components
├── hooks/                 # React custom hooks
│   └── ai/                # AI-related hooks
├── lib/                   # Utilities and types
├── providers/             # React contexts
└── styles/                # Global styles
```

## 🛠️ Tech Stack

### Core

- **[Next.js 14](https://nextjs.org/)**: Modern React framework
- **[TypeScript](https://www.typescriptlang.org/)**: Static typing
- **[Tailwind CSS](https://tailwindcss.com/)**: CSS utilities
- **[Shadcn/ui](https://ui.shadcn.com/)**: Base components

### Code Quality

- **ESLint**: Custom linting rules
- **Prettier**: Consistent formatting
- **Jest & Testing Library**: Automated testing
- **SonarJS**: Code quality analysis

## 🤖 AI-Powered Development

This project was developed using a modern AI-assisted development approach:

1. **Starting with Vercel Template v0**:

   - Began with a basic Next.js template
   - Minimal and clean initial setup
   - Solid foundation for development

2. **Main Development in Cursor**:

   - Development done with [Cursor](https://cursor.sh/)
   - AI pair programming for:
     - Code generation
     - Debugging
     - Refactoring
     - Automated testing

3. **Benefits of the Approach**:
   - Faster and more efficient development
   - More consistent code
   - Better test coverage
   - More complete documentation

## ⚠️ Known Limitations

1. **API Dependencies**:

   - Requires OpenAI API key
   - Rate limits and quotas apply
   - Internet connection required

2. **Content Generation**:

   - Limited to GPT-3.5-turbo capabilities
   - Token limits for responses
   - May require multiple attempts for optimal results

3. **Performance**:
   - Response time depends on API latency
   - Large content may take longer to generate
   - Browser performance with large markdown content

## 🔄 Potential Improvements

1. **Features**:

   - Support for multiple AI models
   - Content history and versioning
   - Export to different formats
   - Custom prompt templates

2. **Performance**:

   - Caching of generated content
   - Optimized markdown rendering
   - Progressive loading for large content

3. **User Experience**:

   - Content preview
   - Real-time editing
   - Keyboard shortcuts
   - Custom themes

4. **Integration**:
   - Social media sharing
   - Content analytics
   - Team collaboration features

## 📚 Additional Documentation

- [Design System](./DESIGN_SYSTEM.md)

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) for the initial template
- [Shadcn](https://ui.shadcn.com/) for the base components
- [Cursor](https://cursor.sh/) for the excellent AI-powered IDE
