---
sidebar_position: 1
---

# Getting started with R Markdown

R Markdown is a powerful tool that allows you to create reports, presentations, and articles using R code. This short guide will show you how to get started with R Markdown in under two minutes! We will use the RStudio IDE, but you can use any text editor you prefer.


## Installation

R Markdown comes along with RStudio. If you do decide to use a different IDE, you need to install the rmarkdown package from CRAN. You can do this by running the following code in R:

```md
install.packages("rmarkdown")
```

## Create an R Markdown file

Next, open RStudio (*or use the template below for another text editor*) and create a new file. Select "File" > "New file" > "R Markdown". This will open an R Markdown template for you - files in R Markdown have the extension `.Rmd`.


````md
---
title: "Untitled"
author: "Author"
date: '2022-07-20'
output: html_document
---

```{r setup, include=FALSE}
knitr::opts_chunk$set(echo = TRUE)
```

## R Markdown

This is an R Markdown document. Markdown is a simple formatting syntax for authoring HTML, PDF, and MS Word documents. For more details on using R Markdown see <http://rmarkdown.rstudio.com>.

When you click the **Knit** button a document will be generated that includes both content as well as the output of any embedded R code chunks within the document. You can embed an R code chunk like this:

```{r cars}
summary(cars)
```

## Including Plots

You can also embed plots, for example:

```{r pressure, echo=FALSE}
plot(pressure)
```

Note that the `echo = FALSE` parameter was added to the code chunk to prevent printing of the R code that generated the plot.


````


## The YAML Header


The first part of this file in the *YAML* header specifies the document's `title`, `author`, and `date` by default and is enclosed by `---`.

````md
---
title: "Untitled"
author: "Author"
date: '2022-07-20'
output: html_document
---
````

In the YAML header, you can also define the path of a bibliographic file, such as a CSL or BibTeX (*.bib*) file, the citation style, output options, tables of contents, LaTeX packages, functions to formatting options and much more.


## Code chunks in R
Code chunks can be used to generate dynamic output to run code and display the results. The results can be displayed in the console or directly in the document.



Below is an example of a code chunk:


````md
``` {r}
x <- 5
y <- 10
z <- x + y
z

```
````

```md
    ## 15
```


Notice that the R code is closed between ```` `` {r}```` and  ```` ``` ````, while the `r` defines the programming language. You can feed options via *knitr* in the code chunk, such as `echo = FALSE`, which only outputs the results of the code in the finished file, not the code itself.

## Markdown

Markdown is a simplified markup language that makes it easy to format your text for an easily readable output. Some examples of the types of markup are:

### Headings

`#` indicates the hierarchical depth of the headings, and when converting, they are displayed/nested accordingly in a logical document structure.

```md
# Heading one

## Heading two

## Heading three
```

### bold italic

The text can be formatted with simple tags, such as surrounding a string with two `**` marks it bold, with a `*` as italic - for example `**bold**` and `*italic*`.

### bullet points

You can also enumerate with `* some point.


```md
* Point 1
* point 2
* Point 3
```

Will output to

* Point 1
* point 2
* Point 3
