---
slug: /
sidebar_position: 0
hide_title: True
hide_table_of_contents: True
---

## Official Documentation of Triton Droids
We're here to design robots that can work in any environment, from dangerous mines to remote farms, and empower communities that have been left behind by technology. 

## Purpose of Documentation
This documentation is not all encompassing and will not teach you the fundamentals of computer science or how to program. It will not teach you how to learn nor will it help you become a better engineer.

The sole purpose of this documentation is to help you become familiar with the necessary tools and developments taking place at Triton Droids. As such, each team will have an onboarding program as well as respective sections for their internal tools / software detailing it's development.

## Contributing to Documentation
In order to contribute, please follow these steps:
1. **Clone the droid-docs repository** -> ```git clone https://github.com/triton-droids/droid-docs.git ```
2. **Install npm**
    1. **Windows** -> [Download](https://nodejs.org)
    2. **Mac** -> ```brew install node``` or [Download](https://nodejs.org)
    3. **Ubuntu** -> ```sudo apt update && sudo apt install nodejs npm``` 
3. **Install yarn** -> ```npm install --global yarn``` 
    1. [Other methods](https://classic.yarnpkg.com/lang/en/docs/install/), expand the section under **Alternatives**
4. **Create a conda environment using the environment.yml** -> ```conda env create --name <env_name> -f environment.yml```
5. **Activate conda environment and install necessary yarn dependencies**
    1. **Activation** -> ```conda activate <env_name>```
    2. **Yarn Dependencies** -> Run ```yarn``` in command line interface where there exists a **yarn.lock** file
6. **Development**
    1. Please do not develop on the main branch; only **merge** your documentation from a separate branch after getting approval.
    2. **Local Development** -> ```yarn start```
    3. **Push to Production** -> ```GIT_USER=<git_username> yarn deploy```

All materials are available within the **docs** folder. To understand how to format markdown, please reference the [documentation of Docusaurus](https://docusaurus.io/docs). If anything is confusing, ask or search away.
