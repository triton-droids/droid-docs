---
sidebar_position: 1
title: "ROS2"
hide_title: true
---

:::info
This tutorial is generously provided by Dr Ilkka Jormanainen at the University of Eastern Finland and Henki Robotics. For up to date material, please reference the official source repository available [here](https://github.com/triton-droids/ros2_onboarding/tree/main).
:::

## Setup  
Set up your development environment, launch your first Gazebo simulation, and get familiar with using Docker containers for ROS 2.

#### What You'll Learn
- Setup the exercises  
- Run the Gazebo simulation  
- Learn to use Docker  


#### Prerequisites
- x86_64 CPU architecture, (ARM64/AArch64 will not work)
- Docker
- Git

### Installing Docker

<details>
<summary><strong>Windows (Docker Desktop)</strong></summary>

#### System Requirements

- Windows 10 64-bit: Pro, Enterprise, or Education (build 19044+)
- Windows 11 64-bit (any edition)
- WSL 2 must be enabled (required for Windows Home)

---

#### 1. Enable WSL 2

Open **PowerShell as Administrator** and run:

```powershell
wsl --install
```

Then **restart your computer**.

Alternatively, enable it manually:

1. Open Control Panel → Programs → Turn Windows features on or off  
2. Enable:
   - Virtual Machine Platform  
   - Windows Subsystem for Linux  

#### 2. Download Docker Desktop

Visit the official Docker Desktop page:  
[https://www.docker.com/products/docker-desktop/](https://www.docker.com/products/docker-desktop/)

Click **“Download for Windows”** and run the installer.
- Select “Use WSL 2 instead of Hyper-V”
- Finish the setup and **reboot** if prompted

#### 3. Verify Installation

After rebooting, open **Docker Desktop** and confirm it is running.

Then open PowerShell and run:

```powershell
docker --version
docker run hello-world
```

You should see Docker version info and a "Hello from Docker!" message.

</details>

<details>
<summary><strong>Ubuntu</strong></summary>

#### 1. Add Docker's Official GPG Key

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

#### 2. Set Up the Docker Repository

```bash
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
$(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

#### 3. Install Docker Engine and packages

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 4. Verify Installation

```bash
sudo docker --version
sudo docker run hello-world
```

You should see Docker version info and a "Hello from Docker!" confirmation message.

#### Optional: Admin Privileges

You can allow your user to run Docker commands without needing `sudo`:

```bash
# Create the Docker group
sudo groupadd docker

# Add your user to the group
sudo usermod -aG docker $USER

# Activate the new group (choose one)
newgrp docker  # OR log out and log back in
```
Now test:

```bash
docker run hello-world
```

#### Optional: NVIDIA GPU Support with Docker

If you have an **NVIDIA GPU** and want GPU acceleration inside containers:

#### 1. Configure the production repository:

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

#### 2. (Optional) Enable experimental packages:

```bash
sudo sed -i -e '/experimental/ s/^#//g' /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

#### 3. Update and install:

```bash
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit
```

#### 4. Configure Docker to use NVIDIA runtime:

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

#### 5. Restart Docker:

```bash
sudo systemctl restart docker
```

You're now ready to run GPU-accelerated containers with Docker!

</details>

:::note
All steps afterwards requires a terminal. If you are on windows, it will be easier using a WSL2 machine as the commands differ on Linux and Windows.

To create a WSL2 machine, please open up powershell as admin and run the command below to enter an Ubuntu machine.
```bash
wsl -d ubuntu
```
That powershell terminal is now running an Ubuntu machine and is how you will interact with it.
:::

### Installing Content Material
Clone the ROS2 onboarding repository:

```bash
git clone https://github.com/henki-robotics/robotics_essentials_ros2.git
```

#### Create Your Workspace
Create a new workspace where you’ll store your exercises. This directory will be automatically mounted inside the Docker container:

```bash
mkdir -p $HOME/exercises_ws/src
```

#### Launch the Docker Container

<details>
<summary><strong>Only for Ubuntu Graphics</strong></summary>

Before starting the Docker container, allow X11 display access by running:

```bash
xhost +
```
> **Note:** You must run this command every time you reboot your computer.
</details>

Navigate to the Docker setup directory and launch the container:
```bash
cd robotics_essentials_ros2/docker/
docker compose up
```

This will build and launch the Docker container, which includes:
- Ubuntu base system
- ROS 2
- Gazebo
- Simulated Andino robot environment

Wait for the container to start up completely.

#### Open a Terminal Inside the Container
Once the container is running, open a new terminal on your host system, then start a terminal session inside the Docker container using the command below:

```bash
docker exec -it robotics_essentials_ros2 bash
```
> The `docker compose up` command launches a fully isolated virtual environment.
> The `docker exec` command lets you interact with the container from a terminal.

:::danger
For windows users, this might be highly confusing. For high level understanding, you have your base machine (Windows), that has a WSL2 Machine (ubuntu) inside of it. This WSL2 machine (ubuntu) will then create another machine inside of it.
:::

#### Run the Simulation
Inside the Docker container, verify the setup by launching the Andino simulation:

```bash
ros2 launch andino_gz andino_gz.launch.py
```
If Gazebo does not open after a few minutes:
- Ensure you have a good internet connection — Gazebo may download assets on the first launch.
- You may see repeated `[ros_gz_sim]: Requesting list of world names` logs — this is normal.
- If Gazebo appears frozen, press “Wait” when prompted.

If the problem persists:
- Refer to [Gazebo GitHub Issue #38](https://github.com/gazebosim/gz-sim/issues/38)
- Run the following command to temporarily disable your firewall:
```bash
sudo ufw disable
```

Once Gazebo opens, press the **play** button to start the simulation.

![](https://github.com/triton-droids/ros2_onboarding/raw/main/images/andino_sim_screenshot.png)

You’ve now successfully:
- Installed all the required tools using Docker
- Started your first simulation with Gazebo
- Prepared your environment for the upcoming exercises

---

## ROS 2 Introduction  
Get introduced to ROS 2 fundamentals, work with Gazebo and RViz, and learn how to use topics and transformations (TF).

#### What You'll Learn
- ROS 2 introduction  
- Gazebo and Rviz  
- ROS 2 topics: publish and subscribe  
- Transformations and TF frames  

---

## SLAM & Navigation Demo  
Use `slam-toolbox` to map your environment and `Nav2` to navigate through it autonomously, while also learning how ROS 2 services work.

#### What You'll Learn
- Create a map using slam-toolbox  
- Navigate autonomously using Nav2  
- ROS 2 services  

---

## Create Your First ROS 2 Package  
Learn the structure of a ROS 2 package, how to build and source it, and how to write your own nodes.

#### What You'll Learn
- Create your first ROS 2 package  
- ROS 2 packages – how to create your own package  
- Building and sourcing  
- ROS 2 Nodes  

---

## Robot Odometry  
Understand and implement robot odometry based on wheel velocities, and publish it using custom ROS 2 nodes in Python.

#### What You'll Learn
- Calculate and publish your robot's odometry using wheel velocities  
- Robot odometry and how to calculate it  
- Publish and subscribe to topics from Python code  

---

## Path Planning  
Explore motion planning with `Nav2`, tune parameters, and implement basic custom path planners.

#### What You'll Learn
- Basic navigation concepts  
- Modify Nav2 parameters  
- Custom path planning using Nav2
