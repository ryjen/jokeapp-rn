# jokeapp

a small app to request a joke from [iCanHazDadJoke](https://icanhazdadjoke.com)

| Random                                               | Favorites                                               |
| ---------------------------------------------------- | ------------------------------------------------------- |
| <img src="docs/screenshots/random.png" height="380"> | <img src="docs/screenshots/favorites.png" height="380"> |

## analysis

### requirements

- random joke in big font
- action button to add/remove favourites
- action button to share joke
- bottom buttons to sync and view favourites
- favourites a card list

## design

### architecture

- uncle bob's clean architecture, separation of data, domain and presentation
  layers with use cases
- redux architecture
- nested navigation

## implementation

### project layout

To reduce conflicts and complexity while increasing cohesion and loose coupling.

#### clean architecture modules

- **domain**: business entities, interfaces and use cases between layers
- **data**: implementation of repositories, data storage and mapping to domain
- **ui**: presentation of data and user interaction

#### custom modules

- **app**: the entry point to the application
- **meta**: code unspecific to app related to programming languages, frameworks or algorithms
- **test**: test data and instrumented tests
- **vendor**: third party project files

### tests

- rules and/or injection to handle threading and coroutines
- fake data generator
- mocking and mock network server
- in-memory database
- user interface tag verifications

## maintenance

### TODO

- [x] speech bubbles
- [ ] improve UX (scrolling, snackbar)
- [ ] ML to know sentiment of joke and predict favorites
- [ ] speech bubble characters based on category or sentiment
- [ ] multiplatform (pending kotlin multiplatform release)
  - [x] switch from room to sqldelite
- [ ] abstract to project template
- [ ] generalize content use case, and add new remote sources, like quotes
- [ ] export to text-over-photo for sharing
- [ ] analytics
- [ ] allow user to add content
- [ ] theme switcher
- [ ] device home screen widget
- [ ] splash screen and logo
- [ ] Text-to-speech, laugh track
- [ ] Animations
- [ ] Monetize user customizations
- [ ] security analysis
