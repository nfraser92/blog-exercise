// Question 1
const articleHeader = document.querySelector(".article__header")
articleHeader.textContent = "Welcome to Niall's Blog"

// Question 2
const removeClassNames = document.querySelectorAll(".article__header")
for (let i=0; i < removeClassNames.length; i++) {
    const element = removeClassNames[i]
    element.classList.add("important")
    // element.classList = ".article__header important" also would work
}

// Question 3
const removeDash = document.querySelector(".dashed")
removeDash.classList.remove("dashed")
   
// Question 4
const goldBorder = document.querySelector(".article__footer")
goldBorder.classList.add("goldenrod")   

