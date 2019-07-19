library(tidyverse)
library(r2d3)

sch <- read.csv("scholarship.csv")

sch$Type <- fct_relevel(sch$Type, "Scholarship ", "Personal savings", "External loan", "Parents paid", "Pell grant", "Loan from parents", "Something else", "College savings account","Parents took out loan")
sch$Type <- fct_relevel(sch$Type, levels=rev(levels(sch$Type)))



sch_pare <- sch %>%
  filter(!Age == "Parents") %>%
  mutate(perc = .01*Percentage)

r2d3("H:/New fldr/sch_bar.js", data = as.vector(sch_pare$perc))
r2d3("H:/New fldr/sch_bar.js", data = c(.3, .3, .5))
