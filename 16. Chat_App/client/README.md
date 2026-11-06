<div align="center">

# Chatrix

### A calm, modern space for conversations.

Responsive messaging interface built with React, designed for desktop and mobile.

<br />

**[🌐 Open the live website](https://chatrix-phi.vercel.app/)**

<sub>Replace <code>YOUR_LIVE_LINK_HERE</code> with the deployed site URL when it is available.</sub>

</div>

---

## About

Chatrix is a messaging UI prototype for exploring a more focused, friendly chat experience. It brings conversations, contacts, groups, and profile controls into a full-screen interface with a compact mobile layout.

The project is currently a **front-end demo**. Conversations and profile edits are held in React state while the page is open; there is no server, account system, or persistent database yet.

## What you can do

- Browse, search, and filter the sample conversations.
- Open a conversation, send messages, and see their local send times.
- Add emoji and attach a file to a conversation.
- Create contact and group conversations in the current session.
- View contact or group details and edit the demo profile, including its photo.
- Explore the Calls, Communities, Archived, and Settings previews.
- Use a responsive desktop workspace or a mobile interface with floating navigation.
- See a GSAP startup animation, with reduced-motion preferences respected.

> **Prototype note:** Sending a message updates the local interface only. Messages, new conversations, and profile changes are not saved after a page reload or shared with other users.

## Why Chatrix?

Chatrix is a UI-focused project for practicing and demonstrating the details that make a messaging app feel usable: clear navigation, readable conversation lists, comfortable chat threads, responsive layouts, and small interaction cues. It also provides a foundation that can later be connected to authentication, a messaging API, and persistent storage.

## Get started

### Requirements

- Node.js (with npm)

### Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite in your terminal.

### Other commands

```bash
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Check the source with Oxlint
```

## Project structure

```text
Chatrix/
├── index.html                         # HTML entry point and page metadata
├── package.json                       # Dependencies and npm scripts
└── src/
    ├── main.jsx                       # React application entry point
    ├── App.jsx                        # Routes, workspace state, dialogs, and startup intro
    ├── App.css                        # Application-wide styles and responsive layouts
    ├── assets/
    │   ├── pnd-logo.png               # Chatrix brand image
    │   ├── Logo.png                   # Browser favicon
    │   └── Chatrix Glassmorphism Chat Interface.png
    ├── components/
    │   ├── Sidebar/
    │   │   └── Sidebar.jsx            # Main navigation and profile shortcut
    │   ├── ChatList/
    │   │   ├── Avatar.jsx             # Conversation-type avatar
    │   │   ├── ChatList.jsx           # Search, filters, and conversation list
    │   │   └── conversations.js       # Sample conversation data
    │   └── WelcomePanel/
    │       └── WelcomePanel.jsx       # Welcome state, message thread, and composer
    └── utils/
        └── dateTime.js                # Localized time formatting helper
```

## Built with

- [React](https://react.dev/) and [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for navigation
- [React Icons](https://react-icons.github.io/react-icons/) for interface icons
- [GSAP](https://gsap.com/) for motion

---

<div align="center">

Made to make conversations feel a little more connected. ✨

</div>
