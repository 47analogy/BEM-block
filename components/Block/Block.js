class Block {
  constructor(element) {
    this.element = element;

    this.element.addEventListener("click", () => {
      this.element.classList.add("Block--hidden");
    });
  }
}

let blocks = document.getElementsByClassName("Block");
blocks = Array.from(blocks).map(block => {
  return new Block(block)
});

console.log(blocks);