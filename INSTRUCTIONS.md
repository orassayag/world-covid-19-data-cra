# Instructions

## Setup Instructions

1. Open the project in your IDE (VSCode recommended)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```

## Configuration

1. Open `src/settings/settings.js`
2. Configure the settings according to your needs:
   - `ENVIRONMENT_MODE`: Set to `DEVELOPMENT` or `PRODUCTION`
   - `COMPONENT_MODE`: Set to `APP` (main application), `ICONS`, `IMAGES`, or `TEST`
   - `IS_COUNTRIES_LOG`: Enable/disable console logging for country updates
   - API URLs: Update if any API endpoints change
   - Timing settings: Adjust fetch delays and timeouts
   - Counter settings: Configure update retry counts and statistics limits
   - Local simulation settings: Configure local testing parameters

## Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm start
```
The application will open at [http://localhost:3000](http://localhost:3000)

### Production Build
Create an optimized production build:
```bash
npm run build
```
The build files will be generated in the `build/` directory.

### Testing
Run the test suite:
```bash
npm test
```

### Backup
Run the backup script:
```bash
npm run backup
```

## Application Modes

### APP Mode (Default)
Displays the full COVID-19 statistics dashboard with:
- Country-wise data boxes
- Real-time updates from multiple sources
- Sorting and filtering options
- Statistics tracking
- Binary clock display

### ICONS Mode
Displays a list of available icons for development and reference.

### IMAGES Mode
Displays a list of country names and flags for testing purposes.

### TEST Mode
Displays the test component for development and debugging.

## Data Sources

The application fetches COVID-19 data from 8 different APIs:
1. **POP1/POP2**: Population data sources
2. **CAC**: Corona API
3. **CLN**: Corona Lmao Ninja API
4. **COA**: COVID19 API
5. **CVA**: Coronavirus-19 API
6. **CVS**: Corona Virus Stats API
7. **GOO**: Google Sheets data source
8. **WIK**: Wikipedia COVID-19 data

Configure API URLs in `src/settings/settings.js` if endpoints change.

## Features

### Real-time Updates
- Automatic data fetching from multiple sources
- Configurable delay between source updates
- Error recovery mechanism for failed API calls

### Country Statistics
- Cases, deaths, and recoveries for each country
- Population data integration
- Country flags and location information
- Google Maps and Wikipedia links

### Sorting and Filtering
- Sort by various metrics (cases, deaths, recoveries, etc.)
- Multiple view options
- Time-based filtering

### Statistics Tracking
- Historical data tracking
- Update history display
- Maximum configurable statistics items

### Local Simulation Mode
For testing without API calls:
- Configure simulation parameters in settings
- Simulate data updates with random values
- Adjustable update percentages and delays

## Project Structure

```
world-covid-19-data-cra/
├── public/              # Static files
├── scripts/             # Build and utility scripts
├── src/
│   ├── components/      # React components
│   │   └── Boxes/       # Box-based UI components
│   │       ├── Country/ # Country-specific components
│   │       └── Master/  # Master control components
│   ├── core/            # Core enums and constants
│   ├── data/            # Static data files
│   ├── initiate/        # Application initialization
│   ├── pages/           # Main page components
│   ├── services/        # Business logic and API services
│   ├── settings/        # Application configuration
│   ├── store/           # Redux store and slices
│   └── utils/           # Utility functions
├── CONTRIBUTING.md      # Contribution guidelines
├── INSTRUCTIONS.md      # This file
├── LICENSE              # MIT License
├── README.md            # Project documentation
└── package.json         # Dependencies and scripts
```

## Troubleshooting

### Build Fails
- Clear `node_modules/` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Ensure all dependencies are installed

### API Errors
- Check internet connection
- Verify API endpoints are still active
- Increase timeout values in settings
- Check browser console for specific errors

### Performance Issues
- Reduce `MAXIMUM_STATISTICS_ITEMS` in settings
- Increase delays between source fetches
- Disable country logging (`IS_COUNTRIES_LOG: false`)

### Local Mode Not Working
- Verify settings in `src/settings/settings.js`
- Check simulation parameters
- Ensure `COMPONENT_MODE` is set correctly

## Development Tips

1. **Hot Reload**: Changes to source files will automatically reload the browser
2. **Redux DevTools**: Install Redux DevTools extension for debugging state
3. **React DevTools**: Install React DevTools extension for component inspection
4. **Console Logging**: Enable `IS_COUNTRIES_LOG` for detailed update logs
5. **Test Component**: Use `COMPONENT_MODE: TEST` to isolate component testing

## Notes

- The project uses Create React App 4.0.3
- Built with React 17 and Redux Toolkit
- Uses functional components and React Hooks
- SCSS for styling with modular architecture
- Axios for API requests with configurable timeouts

## Author

* **Or Assayag** - *Initial work* - [orassayag](https://github.com/orassayag)
* Or Assayag <orassayag@gmail.com>
* GitHub: https://github.com/orassayag
* StackOverflow: https://stackoverflow.com/users/4442606/or-assayag?tab=profile
* LinkedIn: https://linkedin.com/in/orassayag
