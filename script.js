
const projectDescriptions = [
  `AI models, especially large ones, consume significant amounts of water for cooling data centers. While estimates vary, independent studies show that GPT models can consume several bottles of water per query. The true scale of AI’s water footprint remains hard to pinpoint due to a lack of transparency from the companies behind these technologies.<br><br>On Thirsty Robot #1, users interact with a basic interface, housing a stern chatbot that is set up to use the minimum words required to answer a query – thereby reducing its resource consumption; as users interact, a “water bottle wall” tracks the session’s water consumption, also comparing this water usage to that of a standard Google search to highlight the inefficiency of AI for simple tasks.`,
  
  `Thirsty Robot #2 features the same chatbot used in Thirsty Robot #1, but offers a more immersive experience, with a hand-drawn, crayon-like aesthetic. The chatbot sits on a cliffside on a deserted island, surrounded by rising water. As users ask questions, the sea level gradually rises, eventually flooding the screen, referencing the “blue screen of death.”<br><br>This site aims to connect small, seemingly individual actions with their cumulative environmental cost, blending playful visuals with a serious message.<br><br>AI chatbot coded using OpenAI API.`,
  
  `Thirsty Robot #3 takes a maximalist approach, inspired by 1990s web design. The screen is filled with water, which users must drain by clicking rapidly anywhere on the screen. As the water recedes, pop-ups appear, sharing statistics about AI water usage.<br><br>It’s chaotic, but intentionally so — a mix of the past and present, blending nostalgic internet aesthetics with modern concerns, to get people thinking about the changing state of the internet + technology’s frightening pace of development.<br><br><span class='credits'>GIFS sourced from <a href='https://gifcities.org' target='_blank'>gifcities.org</a> | Wave animation & code by <a href='https://melonking.net' target='_blank'>melonking.net</a> | <br>Bubble Cursor from <a href='https://github.com/tholman/cursor-effects?tab=readme-ov-file#90s-cursor-effects' target='_blank'>90s Cursor Effects pack</a> on Github by @Tholman</span>`
];


function updateContent(text) {
  document.getElementById("content").innerHTML = `<p>${text}</p>`;
}


function resetContent() {
  document.getElementById("content").innerHTML = `
    <p>
      Thirsty Robots is a series of playful interventions that explore our growing reliance on Artificial Intelligence and the hidden environmental cost behind it — specifically, AI’s water usage.
      <br><br>
      This project – designed and coded by Anaya Maheshwari – was inspired by nascent conversations seen online about the ecological impact of AI and the noticeable lack of transparency from the companies leading this change.
      <br><br>
      As AI becomes embedded in everything from washing machines to wearables, questions about sustainability are being drowned out by how quickly this technology is being adopted.
    </p>
  `;
}
