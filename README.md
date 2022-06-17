# @kudoku/react-canvas

React UI component for building Kudoku.

# Setting up locally

Simply

```
npm install
```

Then,

```
npm run storybook
```

# How to build a component

In a component, there will be two (or more) files, depending on the type of the component being build.

For example, for our **OTPPlaceholder** component, the file structure is:

```
src
└── components/
    └── OTPPlaceholder/
        ├── **index.js**
        │   **OTPPlaceholder.jsx**
        └── **OTPPlaceholder.css**
```

The most important file is the `index.js` file.

The `index.js` file is to export every file in the OTPPlaceholder folder using `export * from './OTPPlaceholder'`

The `OTPPlaceholder.css` is to handle all the CSS for the component.

Lastly, the `OTPPlaceholder.jsx` is for building the component.

Note: since we are using react, always to `import react` with every `.jsx` or `.tsx` file.

# Bundle it with Rollup

Continuing with the example, on the root of **src/** folder, inside the `index.js` file, add `export * from './components/OTPPlaceholder'`.

Then, using Rollup

```
npm run build-lib
```

The respective component will be bundled using common js and es module. Both of which can be configured on the `rollup.config.js` file.

# Publish with npm

After loging in using `npm login` in the command line, simply type

```
npm publish
```

Please note that we have to semantically update the version of our package in `package.json`s
