# Verify Passengers

This project demonstrates a React-based component that integrates with a camera feed for self-check-in functionality. It includes a modal that streams the user's live camera feed, which automatically stops and closes after a specified time (7 seconds).

## Features

- **Self-Check-in Modal:** Opens a modal to stream the user's live camera feed.
- **Auto-Stop Functionality:** The camera feed stops and closes automatically after 7 seconds.
- **Custom Alert Dialog:** Utilizes a styled alert dialog for user interaction.
- **Modern UI Design:** Styled with modern CSS practices for a smooth user experience.

## Tech Stack

- **React:** For building the user interface.
- **TypeScript:** For type-safe development.
- **CSS:** For styling the components.

## File Structure

```
project-root/
├── components/
│   ├── ui/
│   │   ├── alert-dialog.tsx
│   ├── SelfCheckinModal.tsx
│
├── VerifyPassengers.tsx
├── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd project-root
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Click the **Verify Passengers** button.
2. The **Self-Check-in Modal** will open and access your camera feed.
3. The modal will automatically close after 7 seconds, and the camera feed will stop.
