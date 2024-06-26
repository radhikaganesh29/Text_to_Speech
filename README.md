# Text to Speech Converter (Using HTML, JavaScript, and CSS)

This is a simple web-based application that converts text input into speech using the Web Speech API. The application interface is user-friendly and can be easily integrated into any webpage.



https://github.com/radhikaganesh29/Text_to_Speech/assets/158646026/6e1ca3f6-4114-4e25-8164-a415519341d2



## Features

- **Interactive Text-to-Speech Functionality**: Converts user-entered text into spoken words.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Dynamic Button Text**: Updates the button text to indicate whether the speech is playing, paused, or stopped.
- **Customizable Appearance**: The appearance of the application can be modified with CSS to match your website's design.

## Usage

1. **Enter Text**: Input text into the provided textarea.
2. **Convert to Speech**: Click the "Convert to Speech" button to hear the text spoken aloud.
3. **Pause and Resume**: If the text is longer than 50 characters, the button allows pausing and resuming of the speech.

## HTML

The main structure of the application is defined in the `index.html` file. It includes:
- A header for the application title.
- A textarea for user text input.
- A button to trigger the text-to-speech conversion.

## CSS

The styling is managed in the `style.css` file. It includes styles for:
- The overall layout and appearance of the application.
- The container, header, textarea, and button elements.
- Hover effects for the button to enhance user experience.

## JavaScript

The functionality of the application is implemented in the `script.js` file. It handles:
- Capturing the text input from the textarea.
- Using the Web Speech API to convert the text to speech.
- Managing the state of speech synthesis (playing, pausing, resuming).
- Updating the button text based on the speech state.

## Customization

You can customize the appearance and behavior of the text-to-speech converter by editing the `style.css` and `script.js` files. For example:
- Change colors, fonts, and layout in `style.css`.
- Modify the speech synthesis logic or add new features in `script.js`.
