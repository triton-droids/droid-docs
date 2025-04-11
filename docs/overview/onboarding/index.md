---
slug: /general_onboarding
hide_title: True
hide_table_of_contents: False
---

## General Onboarding for Triton Droids
:::info
Everyone must go through this onboarding in order to work on anything engineering related at Triton Droids. This is due to the fact that we must all be on the same playing field, and without the same background, it leads to miscommunication, obstruction of deliverables, and unnecessary complexity.

Each team will have their own onboarding process that'll introduce new team members the technologies and necessary concepts required to operate.

This is not a technical onboarding and is a conceptual one. If there are any questions, please use the GitHub comments at the bottom of the page to ask clarifying questions.
:::

The general onboarding will consist of a mechanical, electrical, and software onboarding. If your responsibilities are only mechanical/electrical, please only do mechanical/electrical. If you think you will still work on anything software, please do software as well.

Mechanical / Electrical General on boarding
- we
- need
- someone
- who
- will
- write
- the
- onboarding
- for
- this 
- (includes good electrical / mechanical habits, very foundational things such as use KCL vs Nodal Analysis or tools, or laplace domain to analyze or etc, what simulator to use, what software)
- we need this so that all of our engineering team has one common playing field


## Software
This is a very high level introduction to software, and will mainly focus on getting you up to speed so that you can communicate and focus on development. As such, this will not go deep into the complexities of why and how it works. We will focus on why we need it. You only need to read the sections that'll help you get up to speed. Therefore, please understand that this is not an accurate representation of each topic.

### Architecture
Modern computers primarily use one of two processor (CPU) architectures: x86_64 or ARM64. These architectures define how the processor understands and executes machine instructions, and knowing these two is significant when working on software. 

The most common type of architecture found in traditional desktops, laptops, and servers is x86_64, also known as AMD64. As the name suggests, it was developed by AMD and Intel and is used mainly for high performance and compatibility with other devices. The tradeoff is that it consumes more power, making it less ideal for battery powered devices.

The second most common architecture is ARM64, also called AArch64 and is designed to be energy efficient. It's mainly used in smartphones, tablets, and embedded devices (IoTs). It's what the new Macs uses (M1/M2/M3). Even though it was for energy efficiency on battery powered devices, it's becoming more mainstream and laptops are adopting this CPU architecture. Most modern microprocessors also use AArch64 due to energy efficiency. This includes RPI5 and NVIDIA Jetson boards.

The reason this is important is because software is built either for AMD64 or AArch64. Working on software on an AMD64 computer will not be transferrable to an AArch64 computer. Therefore, when debugging, please ensure that your environments are both compatible. 

### Operating Systems
Operating systems run directly on top of the hardware and hides away most of the complex system software so that you as a user can use the computer. The three mainstream Operating Systems are Windows, MacOS, and Linux. Linux is not technically an operating system but is a "kernel", a central core part of what makes an operating system. There are many operating systems or "distributions" built on top of Linux such as Ubuntu, Debian, Fedora, and many more. Everyone working on software is expected to work on Ubuntu 24.04. 

Similar to how an architecture defines the hardware, operating systems defines the software it runs. Many software applications are built either specifically for Windows, MacOS, or Linux, or for all of them. This is important for software due to training our humanoid robot or simulating it. Having a GPU accelerates it, and different computers uses different GPUs (NVIDIA vs Macbook). For now, we are using an RPI 5, but we will upgrade to a Jetson board eventually, giving us more powerful compute from it's GPU.

### Text Editor vs Integrated Development Environment
When we write software, we work in an integrated development environment which contains all of the necessary infrastructure and tools. As such, the only difference between a text editor such as notepad and an IDE is the infrastructure and tools for running software. 

You can use a text editor to work on software, but an integrated development environment hides away all the manual configurations / commands you'd be doing to run the software. A common text editor is Visual Studio Code but can be configured to be an IDE through the plugins. There are different kinds of IDEs for different languages, and I list some below.

- Python: PyCharm
- C/C++: CLion, Eclipse, Visual Studio
- Java: IntelliJ IDEA, Eclipse
- JavaScript/TypeScript: Sublime Text

### Graphical User Interface vs Command Line Interface
You can interact with software either through a graphical user interface or a command line interface. A graphical user interface is simply a graphical rendering of the command line interface. It simplifies everything to a visual landscape. 

A command line interface is done through the terminal, and is "called" by typing the path of the software with the right command structure. 

A popular example is Github, a version control software that offers GitHub Desktop and Git. GitHub Desktop is a graphical version control software that uses Git. If you didn't want to use GitHub Desktop, you could simply install Git and do version control through the terminal.

### Package Managers, Dependencies
A package manager manages the different dependencies a software might use. An example is Python, with its pip package manager. Everything python related is done through pip. Package managers are great because instead of manually installing the software onto your computer you can run a simple command that installs it for you. There are package managers for many things, even Operating Systems. MacOS uses homebrew, Windows uses Chocolatey, and Ubuntu uses apt.

Dependencies are the software packages required for another software to run. This is because most software online depends on another package, as most people do not rewrite everything from scratch. Software also has different versions which means that another person's computer will not be the same as yours. This will cause conflicting versions or what industry defines as a "dependency conflict".

The way you solve this is either through a virtual machine, virtual environment, containers.

### Virtual Machines, Virtual Environments, Containers
A virtual machine is a machine that's isolated from your own computer. The easiest way to know if you're in a virtual machine is if you're remotely connecting to it through a login system.

A virtual environment is an isolated environment other than your main one. Whenever you install development software, it installs it natively or onto your computer, but sometimes, you want to download it for a certain project only. You can achieve this by using a virtual environment. A common example is python, and you can create a python virtual environment to isolate specific dependencies. There are third part software such as Anaconda and Miniconda that does this exact same thing.

A container is basically the combination of both a virtual machine and a virtual environment. It runs on your computer, but it creates a "container" inside of your computer that has a new machine and a new environment. The most famous container software is Docker. Inside each container, you can run different operating systems and different software versions. 

The reason why we need containers or virtual environments is so that everyone develops on the same machine. If we all different operating systems and versions, an error found on a team member computer may not be found on another members. As such, working in a container removes these unnecessary conflicts and focuses on the core issues at hand. 

### Version Control
We need version control because sometimes, we may introduce error breaking code and we want a checkpoint that we can return to. When we work in big groups, working on the same thing can be difficult because everyone will be changing it. Version control allows us to work separately but still allow us to specifically choose which work to add into our code. It also allows us to keep a history of our code, in case we want to go back and start over. The most famous version control is Git.

### Coding Convention
There are many things that comes with writing software. An important aspect is that your code isn't only being read by you. It will be read and used by many. Therefore, the goal is to make code as easy as possible for others to understand. A good rule is that if you can't understand it after a year, it's poorly written code. 

We want clear communication, and this rule does not apply only to software. There will be a list of conventions within the software onboarding that ALL members writing software must adhere to.

### Best Practices
There is only one best practice to keep in mind for general onboarding, which is to minimize cognitive complexity. We all have our specialties, and some may have overlapping skills, but not everyone has the same skillset. We're all unique with differing skills, and as such, it is in our best interest to minimize the time and effort needed to understand the work of others.

What I mean is that if you are creating software, make it as easy as possible to understand when referencing it. Make documentations for it, or when communicating, use simpler words and not specific jargons.

## Zero Tolerance
There will be no tolerance for any form of disrespect or superiority to any members. Please treat all members with respect, regardless of your title. Leadership roles are to lead, not to supervise. Please set an example for all members so they may stay and contribute to the future of Triton Droids.
