# Web Weather App 

A simple weather app built with **React.js** using the OpenWeatherMap API. This app allows users to search for real-time weather information of any city and features a clean design with dark mode support.

## Features 
- Search for current weather by city name.
- Displays:
  - Temperature (in Celsius).
  - Weather conditions (e.g., Sunny, Cloudy, Rainy).
  - Humidity and wind speed.
- Loading spinner while fetching data.
- Dark mode toggle for better user experience.
- Responsive design for mobile and desktop.

## Technologies Used 🛠️
- **React.js**: Framework for building the user interface.
- **Axios**: To fetch data from the OpenWeatherMap API.
- **CSS**: For styling the app.
- **OpenWeatherMap API**: For real-time weather data.

## How to Run Locally 
1. Clone the repository:
   ```bash
   git clone https://github.com/tisdeepti/web-weather-app.git
   cd web-weather-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add your OpenWeatherMap API key:
   - Create a `.env` file in the project root and add:
     ```env
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```
4. Start the development server:
   ```bash
   npm start
   ```

## Future Enhancements 
- Add a 5-day weather forecast feature.
- Enable users to toggle between Celsius and Fahrenheit.
- Add geolocation to fetch weather for the user's current location.
- Improve the design with animations and advanced UI components.

## License 
This project is licensed under the MIT License.

## Acknowledgments 
- [OpenWeatherMap](https://openweathermap.org/) for the weather API.
- [React.js](https://reactjs.org/) for the frontend library.
