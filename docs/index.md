---
sidebar_position: 1
---

# R Markdown

R Markdown is a powerful tool that allows you to create reports, presentations, and articles using R code. This short guide will show you how to get started with R Markdown in under two minutes! We will use the RStudio IDE, but you can use any text editor you prefer.


## Installation

R Markdown comes along with RStudio. If you do decide to use a different IDE, you need to install the rmarkdown package from CRAN. You can do this by running the following code in R:

```md
install.packages("rmarkdown")
```

## Getting start

Next, open RStudio and create a new file. Select "File" > "New File" > "R Markdown". This will open a template R Markdown file for you -  files in R Markdown have the extension ".Rmd",


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





The first part of this file in the *YAML* header specifies the document's `title`, `author`, and `date`.
