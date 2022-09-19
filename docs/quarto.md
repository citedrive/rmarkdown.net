---
sidebar_position: 2
---


# Getting Started with Quarto by RStudio: A Beginner's Guide



If you're a scientist, researcher, data analyst, or student who wants to create beautiful documents with dynamic content, Quarto® by RStudio is the perfect publishing system for you. Quarto makes it easy to author your documents in plain text markdown or Jupyter notebooks, then publish them in various formats, including HTML, PDF, MS Word, ePub, and more. You can also use Quarto to create scientific markdown documents with equations, citations, crossrefs, figure panels, callouts, advanced layout options - and more!
If you're familiar with R Markdown, Quarto will feel very natural and easy to use.


## First steps:

To start using Quarto, simply download the most recent RStudio version or the stand-alone if you use a different tool, such as VS code. If you choose to use VS Code, check out the [Quarto VS Code Extension](https://marketplace.visualstudio.com/items?itemName=quarto.quarto)..

Once you have everything ready, create a Quarto document with the extension `.qmd` in RStudio.


(fig)


## Editor

After opening a Quarto document for the first time, you will notice three sections: YAML, Text Body, and Output. The YAML section is where you specify the metadata for your Quarto document. This includes, but is not limited to, the title, author, date, and description of your document. The Text Body is where you will write your Quarto document. As we mentioned before, Quarto documents are based on Markdown, so if you are familiar with Markdown, Quarto will feel very natural and easy to use. Notice that you have the choice between visual and source editors.

(fig)



Just as with R Markdown, you define code chunks in the following fashion:


````
```{r}

Your code goes here

```
````


The Output section is where you can see the rendered version of your Quarto document. This is useful for seeing what your Quarto document will look like in its final form. By default, Quarto will output your document as an HTML file, but you can also choose to output your Quarto document as a PDF, MS Word document, or ePub file.

Now that you know the basics of Quarto, it's time to start writing your Quarto document! In the future, we'll show you how to add dynamic content to your Quarto document using Python, R, Julia, and Observable. Stay tuned!
