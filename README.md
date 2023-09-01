# Tailwind + React + Vite + UI/UX

Project to introduce myself into `Tailwind` and learn its features.

Fully responsive landing page for a bank brand, with Modern `UI/UX` in React JS with Tailwind (in Vite)

### Figma [file] (https://www.figma.com/file/bUGIPys15E78w9bs1l4tgS/HooBank?node-id=1%3A321&mode=dev)

### The [site] (https://hoobank-vanesascode.vercel.app)

![hoobank 1](https://github.com/vanesascode/bank-landing-page-tailwind-react-vite-ui-ux/assets/131259155/fec2bdb4-7a86-4464-a5cd-5dfb359319b6)

---

## 🌟VITE

- To create a project:

- [x] run: `npm create vite@latest`

select 'React' as the framework and select 'Javascript' as the variant.

- [x] run: `npm install` to install all the dependencies

---

- To run the project:

- [x] run: `npm run dev`

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## 🌟TAILWIND

Go to the frameworks guides. [In this case for Vite](https://tailwindcss.com/docs/guides/vite)

- [x] `npm install -D tailwindcss postcss autoprefixer`

- [x] `npx tailwindcss init -p`

---

### tailwind.config.js

- The `content` property is an array that specifies the files which Tailwind CSS should scan for classes.

In this case, it includes the "./index.html" file and all files matching the pattern "./src/\*_/_.{js,jsx}". This means that Tailwind CSS will scan the index.html file and all JavaScript and JSX files inside the src directory for classes to include in the final CSS output.

- The `mode` property is set to `jit`, which stands for "just-in-time" mode. This mode allows Tailwind CSS to generate styles on-demand, resulting in smaller file sizes and improved performance.

- The `theme` property is an object that allows you to customize various aspects of the default styling provided by Tailwind CSS.

In this case, the extend property is an object that includes customizations for colors and fonts. The colors object defines custom color values for the "primary", "secondary", "dimWhite", and "dimBlue" colors. The fontFamily object defines a custom font stack for the "poppins" font.

The `screens` property is an object that defines custom breakpoints for responsive design. It includes various screen sizes such as "xs", "ss", "sm", "md", "lg", and "xl", and their corresponding pixel values.

The `plugins` property is an array that allows you to add additional plugins to Tailwind CSS. In this case, the array is empty, so no additional plugins are being added.

---

### Flex 1

In CSS it is `flex: 1 1 0%`

It is shorthand for three individual flex properties: `flex-grow` , `flex-shrink` , and `flex-basis`.

By combining these three values, flex: 1 1 0%; ensures that the flex item will both grow and shrink as needed, while starting with no initial width. This allows other flex items within the same flex container to occupy the available space.

If are are not familiar with these, have a look:

- `flex-grow` determines how much the flex item should grow relative to other flex items within the same flex container. In this case, it is set to 1 , which means it will grow proportionally to fill any available space.

- `flex-shrink` determines how much the flex item should shrink relative to other flex items. Here, it is also set to 1 , meaning it will shrink proportionally if there is not enough space to accommodate all flex items.

- `flex-basis` specifies the initial size of the flex item before any remaining space is distributed. In this case, it is set to 0% , indicating that the flex item should start with a width of 0% of the available space.

---

## 🌟 index.js (inside "constants" folder)

In `index.js` we keep the text of the website. The arrays and objects in it are used to populate the data in this User Interface(UI) (UI are the visual elements and controls that allow users to interact with a software application or system.)

In this case we have some arrays with lists of ids logos or even some social media icons and lists of links that we want to include in the footer.

👉 This allows a user change things without having to know how to code.

This is also useful if you want to transfer this application to use a `CMS(Content Management System)` A CMS provides a user-friendly interface for non-technical users to easily add, edit, and organize content such as text, images, videos, and documents. It typically separates the content from the presentation layer, allowing users to focus on the content creation without needing to know HTML, CSS, or other technical skills.

---

## 🌟 styles.js

This file is useful for defining and organizing `Tailwind reusable and responsive CSS classes` for styling elements in a user interface.

By encapsulating the styling properties in an object, it provides a `centralized and maintainable` way to manage and apply styles throughout the application.

So, you import the file into the App.jsx file, and work with the classes like this:

```
import styles from "./styles";

const App = () => (
  <div className={`${styles.flexCenter} ${styles.paddingX}`}>Hello World</div>
);

export default App;
```

👉 You can `Ctrl + click` on any class and it will automatically take you to the file to see what that class is made of.

---

## 🌟 index.js (in "components" folder)

Each component is imported and then re-exported in the export statement at the end of the code.

Because we have so many components to import, we do it in this file instead of directly in the App.jsx file. This way, we can `keep the App.jsx file clean` and focused on the main logic and structure of the application. By centralizing the component imports in a separate file, we can easily manage and organize the components without cluttering the main file.

## 🌟 index.js (in "assets" folder)

The same idea that in the index.js file of the components folder. It just makes the code of the components cleaner and you have all your assets listed in just one file and have a record of what you are using and what you are not.

---

## 🌟 Javascript ternaries to determine classes based on the index of the element:

This Javascript code is using a conditional (ternary) operator to determine the value of a CSS class name based on the value of the index variable. Since the 'li's are being iterated from a javascript array, it's easy peasy!!

```
 <li
  key={nav.id}
  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
    index === navLinks.length - 1 ? "mr-0" : "mr-10"
  }`}>
</li>
```

## 🌟 Javascript && to determine elements based on the index of the iterated items:

(See the whole code in the `Stats.jsx` file)

```
{stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
          {index !== stats.length - 1 && (
            <div className={`${styles.flexCenter} flex-1 `}>
              <p className="font-poppins font-normal xs:text-[12px] text-[9px] xs:leading-[26.58px] leading-[21.58px] text-white ml-3">
                |
              </p>
            </div>
          )}
        </div>
      ))}

```

## 🌟 Navbar animation:

```
.sidebar {
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}


@keyframes slide-top {
  0% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
```

The `cubic-bezier function` takes four parameters, each ranging from 0 to 1, which define the control points of a cubic Bézier curve. These control points determine the shape of the curve and, consequently, the `timing of the animation`.

There are also predefined keywords like `ease` , `ease-in` , `ease-out` , and `ease-in-out` that provide common timing functions. But using cubic-bezier allows you to have more control over the timing and feel of your animations, giving you the flexibility to create unique and customized effects.

## 🌟 Example of efficiency in the styles:

We know that we are going to need bigger paddings to separate sections when the screen is big. And we know that we are going to prefer smaller paddings for the mobile version, for example. We also want consistency through the whole app.

That is why we choose a padding for the big screens (sm:py-16, which means from small to bigger) and another for the rest (py-6, which will be applied when smaller than small screens).

Then, we create a class in our styles.js file: `paddingY: "sm:py-16 py-6"`

And we apply it as javascript in our components: `className={`${styles.paddingY}`}`

## 🌟 Styles props

We can have a reusable component like a button that has the main styles, but that also has styles passed as a prop:

```
import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Get Started
  </button>
);

export default Button;


```

So, in the previous code snippet, `${styles}` is a dynamic class name that allows additional styles to be passed as a prop.

## 🌟 Passing multiple props without specifying each one:

That can be done with the spread operator (...). It passes all the properties of an object as separate props to the component. It allows for a concise and flexible way of passing multiple props without explicitly specifying each one:

In this example it's a list of features we are iterating using a component:

```
features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))

```

## 🌟 CSS Variables:

the `:root` selector has two CSS variables set. The :root selector represents the root element of the document, which in most cases is the <html> element.

```
:root {
  --black-gradient: linear-gradient(
    144.39deg,
    #ffffff -278.56%,
    #6d6d6d -78.47%,
    #11101d 91.61%
  );
  --card-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
}

```

By defining these CSS variables within the :root selector, they can be accessed and used throughout the document, providing a convenient way to reuse and update values across multiple CSS rules and elements.

For example, in here:

```
.feature-card:hover {
  background: var(--black-gradient);
  box-shadow: var(--card-shadow);
}

```
