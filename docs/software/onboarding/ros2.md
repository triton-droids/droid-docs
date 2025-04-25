---
sidebar_position: 1
title: "ROS2"
hide_title: true
---

:::info
This tutorial is generously provided by Dr Ilkka Jormanainen at the University of Eastern Finland and Henki Robotics. For up to date material, please reference the official source repository available [here](https://github.com/triton-droids/ros2_onboarding/tree/main).
:::

<details>
<summary><strong>Docker Cheatsheet</strong></summary>

List of all the used Docker commands during the exercises.

> **Note:** `docker compose` commands must be run in the directory that contains the `docker-compose.yaml` file:

```bash
cd robotics_essentials_ros2/docker/
```

---

#### Re-build a container

```bash
docker compose up --build
```

---

#### Run a container

```bash
docker compose up
```

---

#### Run a container in detached mode

```bash
docker compose up -d
```

---

#### Open a new terminal inside the Docker container <a id="new-terminal"></a>

```bash
docker exec -it robotics_essentials_ros2 bash
```

---

#### List all running Docker containers

```bash
docker ps
```

---

#### Stop a running container

```bash
docker stop robotics_essentials_ros2
```

---

#### Remove a container

```bash
docker rm robotics_essentials_ros2
```
</details>

---

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
- What are ROS2, Gazebo, and RViz  
- How to launch Andino Sim and Control it from Gazebo
- ROS2 Topics
- TF Frames 

What are ROS 2, Gazebo, and Rviz
How to launch Andino simulation and control the robot from Gazebo
What ROS 2 topics are
How to publish to a topic
How to subscribe to a topic
What tf-frames are

### Conceptual Understanding
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/ros_logo_white_bg.svg)

[ROS 2 (Robot Operating System 2)](https://www.ros.org/) is an open-source framework for building robot software.
It provides a set of tools, libraries, and conventions, including a middleware for internal communication. 
It is designed to support real-time performance and multi-robot systems.


#### Gazebo
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/gazebo_logo_white_bg.svg)

[Gazebo](https://gazebosim.org/home) is a powerful open-source robotics simulator that allows developers to test and validate robot designs in complex environments, offering realistic physics and sensor models.

#### Rviz
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_logo.png)

[RViz](https://github.com/ros2/rviz) is a 3D visualization tool for ROS that enables developers to visualize sensor data, robot models, and environment maps, aiding in debugging and monitoring robot behavior.

#### Andino
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/andino_robot.png)

Andino is a fully open-source, educational low-cost robot developed by [Ekumen](https://github.com/Ekumen-OS/andino).
It uses ROS 2 to implement its functionalities and has fully functional [Gazebo simulations](https://github.com/Ekumen-OS/andino_gz) of it available.

### Launch the Andino Robot in Gazebo Simulation
From the setup, we can run these commands if you haven't yet:
```bash
cd robotics_essentials_ros2/docker/
docker compose up -d
docker exec -it robotics_essentials_ros2 bash
ros2 launch andino_gz andino_gz.launch.py
```

#### Exercise 1. Controlling the Robot 
Using the GUI, try out all the teleoperation commands to control the Andino. During startup, the Gazebo simulation will most likely be paused. Just make sure you press first the play button in the bottom left of the Gazebo UI to start the simulation and see that the robot moves when you send teleoperation commands.

![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/gazebo_teleop.png)

### ROS2 Topics
ROS 2 topics are a core communication mechanism in ROS 2 that enable data exchange in a publish/subscribe model. Publishers send messages to a named topic, while subscribers listen to that topic to receive relevant data.

#### Subscribing to a Topic
By subscribing to a topic, you can read sensor data (lidar, camera) and other useful data (map, odometry) from your robot.

Open a new terminal inside the Docker container and run the following commands. You can reference the [docker cheatsheet](#docker-cheatsheet) at the top if needed:
1. Lists all currently available ROS2 topics
```bash
ros2 topic list
```
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/ros2_topic_list.png)

2. Reads topic data from the topic /echo (This is a LIDAR sensor)
```bash
ros2 topic echo /scan # Ctrl + C to stop
```
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/ros2_topic_echo.png)

3. Get topic info and structure
```bash
ros2 topic info /scan
```
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/ros2_topic_info.png)


#### Publishing to a Topic
There are two ways to publish data to a topic. You can set up a node via code to continuously or functionally send out data or you can use the command line to send out data. Here, we'll use the command line, and then we'll introduce nodes later on.

##### Move The Robot via CLI Topic
Try moving the robot by publishing to /cmd_vel:
```bash
ros2 topic pub /cmd_vel geometry_msgs/msg/Twist "{linear: {x: 0.2}}"
```

Stop the robot by setting it to 0:
```bash
ros2 topic pub /cmd_vel geometry_msgs/msg/Twist "{linear: {x: 0.0}}"
```

#### Exercise 2. Publish a Robot to Rotate
Publish a message via CLI to rotate around it's axis.

<details>
<summary><strong>Hint</strong></summary>
1. Check what message type ```/cmd_vel``` and what you can send it.
2. Use ```ros2 interface show <message_type>``` to see what values you can send
</details>

<details>
<summary><strong>Solution</strong></summary>

You can rotate the robot around the z-axis (yaw) using the following CLI command:
```bash
ros2 topic pub /cmd_vel geometry_msgs/msg/Twist "{angular: {z: 0.5}}"
```
</details>

### RViz
RViz is a useful visualization tool that allows us to display data from ROS 2 topics. With these examples, you will learn how to do that.

#### Subscribe to a new data source:
The Andino robot is constantly sending images from the camera. We can see them using RViz:
1. Click "Add" button on the bottom left corner of RViz
2. Choose by topic.
3. Choose ```Camera``` under the ```/image_raw```.

![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_add_camera.png)
:::tip
Set overlay alpha to 1 to hide the artifacts on top of the image
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_add_camera_2.png)
:::

### Transformation Frames (TFs)
This is the core of robotics representation and is used in ROS2 to describe spatial relationships between different coordinate frames in a robotic system. In simpler words, each transform frame sits in a different position on a 3D axis with its own coordinate system. They sit at the center of the robot, at the center of sensors, at joints, and they are the "Map" and "Odometry" frames. You can think of it as one being the global and the other being local. When your robot moves, the global doesn't move, but your local frame does. Transform frames allow us to convert positions and orientations from one frame to another, and basically keep track of how each part of your robot moves in relation to the other parts of the robot. This is crucial for tasks like navigation, sensor fusion, and manipulation. If you don't understand it, it's fine as this is an upper division and graduate level concept.

The main component for handling transforms in ROS 2 is the tf2 library. It provides:
- Coordinate Frames
- - Each sensor or part of a robot has its own coordinate frame (e.g., the robot's base, sensors, end effectors).
- Transformations
- - These include translations (movement along axes) and rotations (changes in orientation) between frames.

By using transforms, robots can effectively understand their position in the world and how their sensors and motors are located in relation to their body.

The relationship between these coordinate frames is determined with tf-tree. It essentially tells with a tree-like structure what is the child-frame's position in relation to the parent frame.

#### Commonly Used Coordinate Frames
| Frame           | Description |
|----------------|-------------|
| **map**         | Provides a global reference point for the robot's environment. It typically contains 2D coordinates representing the robot's position in a known map. |
| **odom**        | Tracks the robot’s position relative to its starting point using odometry. Subject to drift and cumulative error. |
| **base_footprint** | Represents the 2D projection of the robot's base on the ground, often used for navigation and path planning. |
| **base_link**   | The origin of the robot's body frame, used to anchor other sensors and links. |
| **laser_link**  | Specifies the location and orientation of the robot’s laser scanner, essential for tasks like SLAM and obstacle detection. |

![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/ros2_tf_frames.png)

### TFs in RViz
When working with RViz, you will need to use the "Fixed Frame" to determine from which frame's perspective you are visualizing the data. This is an important feature to know about, as sometimes the data you are looking to visualize might not be available if you are visualizing a wrong frame (point of view).

#### Changing Fixed Frame
On Andino, the default frame is set to "base_footprint". This means that RViz coordinate origin (0, 0), is set to the robot's footprint. Move the robot around with teleoperation using Gazebo. You can see that the robot is always located in the center of the grid that RViz visualizes.
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_coordinate_frame.png)

Try changing the "Fixed Frame" under "Global Options" from "base_footprint" to "odom" to use odometry as the coordinate frame instead of the robot base_footprint frame.
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_fixed_frame.png)

Move the robot around and you'll see that the odometry is used as the coordinate frame instead of the robot base_footprint frame.
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/rviz_odom_frame.png)

#### Visualizing the TF-tree
Sometimes it might be useful to check the robot's tf-tree for debugging purposes. You can do it by opening the "Tree" option under the TF menu.
![](https://github.com/triton-droids/ros2_onboarding/raw/main/1-ros_2_introduction/images/tf_tree.png)

:::tip
To ensure the odom frame appears correctly at the top of the tree, you may need to press the reset button on the bottom left of Rviz. The odom frame tracks the robot's movement in the environment, making it the logical parent frame for accurately tracking the motion of all other frames.
:::

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
