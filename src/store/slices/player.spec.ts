import { player as reducers, play, playerSlice, next } from "./player";
import { describe, it, expect } from "vitest";

// test("reducers", () => {
//   const state = reducers(
//     {
//       player: {
//         course: {
//           modules: [
//             {
//               id: "1",
//               title: "Iniciando com React",
//               lessons: [
//                 { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
//                 {
//                   id: "w-DW4DhDfcw",
//                   title: "Estilização do Post",
//                   duration: "10:05",
//                 },
//                 {
//                   id: "D83-55LUdKE",
//                   title: "Componente: Header",
//                   duration: "06:33",
//                 },
//                 {
//                   id: "W_ATsETujaY",
//                   title: "Componente: Sidebar",
//                   duration: "09:12",
//                 },
//                 { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
//                 {
//                   id: "8KBq2vhwbac",
//                   title: "Form de comentários",
//                   duration: "11:34",
//                 },
//               ],
//             },
//             {
//               id: "2",
//               title: "Estrutura da aplicação",
//               lessons: [
//                 {
//                   id: "gE48FQXRZ_o",
//                   title: "Componente: Comment",
//                   duration: "13:45",
//                 },
//                 {
//                   id: "Ng_Vk4tBl0g",
//                   title: "Responsividade",
//                   duration: "10:05",
//                 },
//                 {
//                   id: "h5JA3wfuW1k",
//                   title: "Interações no JSX",
//                   duration: "06:33",
//                 },
//                 {
//                   id: "1G0vSTqWELg",
//                   title: "Utilizando estado",
//                   duration: "09:12",
//                 },
//               ],
//             },
//           ],
//         },
//         currentModuleIndex: 0,
//         currentLessonIndex: 4,
//       },
//     },
//     { type: "player/next" }
//   );
//   expect(state).toEqual({
//     player: {
//       course: {
//         modules: [
//           {
//             id: "1",
//             title: "Iniciando com React",
//             lessons: [
//               { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
//               {
//                 id: "w-DW4DhDfcw",
//                 title: "Estilização do Post",
//                 duration: "10:05",
//               },
//               {
//                 id: "D83-55LUdKE",
//                 title: "Componente: Header",
//                 duration: "06:33",
//               },
//               {
//                 id: "W_ATsETujaY",
//                 title: "Componente: Sidebar",
//                 duration: "09:12",
//               },
//               { id: "Pj8dPeameYo", title: "CSS Global", duration: "03:23" },
//               {
//                 id: "8KBq2vhwbac",
//                 title: "Form de comentários",
//                 duration: "11:34",
//               },
//             ],
//           },
//           {
//             id: "2",
//             title: "Estrutura da aplicação",
//             lessons: [
//               {
//                 id: "gE48FQXRZ_o",
//                 title: "Componente: Comment",
//                 duration: "13:45",
//               },
//               { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
//               {
//                 id: "h5JA3wfuW1k",
//                 title: "Interações no JSX",
//                 duration: "06:33",
//               },
//               {
//                 id: "1G0vSTqWELg",
//                 title: "Utilizando estado",
//                 duration: "09:12",
//               },
//             ],
//           },
//         ],
//       },
//       currentModuleIndex: 0,
//       currentLessonIndex: 5,
//     },
//   });
// });

describe("player slice", () => {
  it("should be able to play lesson", () => {
    const initialState = playerSlice.getInitialState();

    const state = reducers(initialState, play([1, 2]));
    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it("should render the next lesson correctly", () => {
    const initialState = playerSlice.getInitialState();

    const state = reducers(initialState, next());
    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });
  it("should render the next module correctly", () => {
    const exampleState = {
      course: {
        modules: [
          {
            id: "1",
            title: "Iniciando com React",
            lessons: [
              { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
              {
                id: "w-DW4DhDfcw",
                title: "Estilização do Post",
                duration: "10:05",
              },
            ],
          },
          {
            id: "2",
            title: "Estrutura da aplicação",
            lessons: [
              {
                id: "gE48FQXRZ_o",
                title: "Componente: Comment",
                duration: "13:45",
              },
              { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
            ],
          },
        ],
      },
      currentModuleIndex: 0,
      currentLessonIndex: 0,
    };

    const state = reducers({ ...exampleState, currentLessonIndex: 1 }, next());

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });
});
