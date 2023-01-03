import { c as create_ssr_component, d as add_attribute, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
const Character = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { character } = $$props;
  if ($$props.character === void 0 && $$bindings.character && character !== void 0)
    $$bindings.character(character);
  return `<div class="${"character"}"><img${add_attribute("src", character.image, 0)}${add_attribute("alt", character.name, 0)}>
    <h1>${escape(character.name)}</h1>
    <h3>${escape(character.species)}</h3></div>`;
});
const app = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let characters = [];
  let page = 1;
  async function LoadCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page);
    const data = await response.json();
    characters = data.results;
  }
  LoadCharacters();
  return `<h1 class="${"title"}">Rick y Morty</h1>

<div class="${"btns"}"><button ${"disabled"} class="${"btn"}">Previous page</button>
    <button class="${"btn"}">Next page</button></div>
<div class="${"container"}"><div class="${"grid"}">${each(characters, (character) => {
    return `${validate_component(Character, "Character").$$render($$result, { character }, {}, {})}`;
  })}</div></div>`;
});
export {
  Page as default
};
