import Root from "./components";
import link from "@frontity/html2react/processors/link";

const jjoTheme = {
  name: "jjo-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
}

export default jjoTheme


// const Root = () => {
//   return (
//     <>
//       <h1>JejakOnline</h1>
//     </>
//   );
// };

// export default {
//   name: "jjo-theme",
//   roots: {
//     jjoTheme: Root
//   },
//   state: {
//     jjoTheme: {}
//   },
//   actions: {
//     jjoTheme: {}
//   }
// };
