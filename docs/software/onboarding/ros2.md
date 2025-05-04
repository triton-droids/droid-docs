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
Set up your development environment, launch your first Gazebo simulation, and get familiar with using Docker containers for ROS2.

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

### Basic Concepts
#### SLAM-toolbox
[Slam-toolbox](https://github.com/SteveMacenski/slam_toolbox/tree/ros2) is an advanced 2D SLAM (Simultaneous Localization and Mapping) solution for ROS 2. It provides tools for online (real-time) and offline mapping, lifelong mapping, loop closure, and localization. Slam-toolbox is designed for both real-time applications and mapping large-scale environments efficiently.

Simultaneous Localization and Mapping allows the robot to "localize" and map it's environment simultaneously. It tells us where the robot is and what the environment looks like based on sensor readings using some pretty neat mathematics.

#### Nav2
[Nav2](https://github.com/ros-navigation/navigation2), or the Navigation2 stack, is a framework for ROS 2 that enables robots to navigate autonomously. It handles path planning, path following, obstacle avoidance, and localization in complex environments. Nav2 is modular, allowing developers to customize or replace components to suit specific robotic needs.

#### AMCL
[AMCL](https://github.com/ros-navigation/navigation2/tree/main/nav2_amcl) (Adaptive Monte Carlo Localization) is a probabilistic localization system used in ROS 2, and is part of the Nav2 stack. It enables robots to determine their position within a known map using particle filters. AMCL uses sensor data, typically from a LiDAR, to refine the estimated pose of the robot as it navigates.

### Mapping Demo
Let's try to map our simulator environment using the Andino.

1. Run the simulation inside the docker container ```ros2 launch andino_gz andino_gz.launch.py```
2. Open a new terminal inside the container and run slam-toolbox ```ros2 launch andino_gz slam_toolbox_online_async.launch.py```
3. Subscribe to the ```/map``` topic in RViz to view the map that is being built.
![map](https://github.com/triton-droids/ros2_onboarding/raw/main/2-slam_and_navigation_demo/images/subscribe_to_map_topic.png)
4. Use teleoperation in Gazebo to drive the robot around so you can get sensor readings.
![localization](https://github.com/triton-droids/ros2_onboarding/raw/main/2-slam_and_navigation_demo/images/mapping_demo.png)

:::tip
You can right-click the robot in simulation and choose "Follow" -camera mode to better keep track of your robot.
:::

5. If you are satisfied with the map that was built, open a new terminal inside the docker container and run this command to save the map as a file ```ros2 run nav2_map_server map_saver_cli --free 0.15 --fmt png -f $HOME/andino_map```

### Autonomous Navigation
Using the map we just built, we can autonomously navigate it using Nav2. Before continuing on though, make sure to stop the previous simulation and slam-toolbox by pressing ```CTRL+C```. Make sure to do this for all your terminals.

To autonomously navigate, follow these steps:
1. Open a new terminal inside the docker container and launch the Andino simulation with Nav2: ```ros2 launch andino_gz andino_gz.launch.py nav2:=True```
2. By default, it'll use a presaved map, but if you want to use the map we just created, run ``` ros2 service call /map_server/load_map nav2_msgs/srv/LoadMap "{map_url: $HOME/andino_map.yaml}"```
3. In RViz, there'll be a ```2D Pose Estimate``` for AMCL.
![pose estimate](https://github.com/triton-droids/ros2_onboarding/raw/main/2-slam_and_navigation_demo/images/pose_estimate.png)

After pressing it, the robot will know it's location.
![location](https://github.com/triton-droids/ros2_onboarding/raw/main/2-slam_and_navigation_demo/images/nav2_demo_with_pose_estimate.png)

#### Exercise 3. Autonomous Navigation with Nav2
Give the robot different goals to get familiar with Nav2. Here are some guiding questions.

- Pay attention to what obstacles the robot is able to see with its laser scanner.
- Pay attention to the planned paths that the robot makes. Does it always follow them precisely?
- Are the planned paths always feasible? Does the robot get stuck?

### ROS2 Services
If you changed Nav2 to use your 2D map, you might have noticed that you just called a ROS2 service. In addition to ROS2 topics, services are a complementary communication method. Instead of simply publishing and subscribing, services work using a request-response model.

Services can be called with a specific type of service request. The request is processed and a response received as a result. For example in the Nav2 demo, we called a /map_server/load_map service topic, to load a new map, with a request of ```"{map_url: /home/user/andino_map.yaml}"```, which has the type of nav2_msgs/srv/LoadMap message.

To list all available services:
```ros2 service list```

To include message type:
```ros2 service list -t```

To invoke a request for a service:
```ros2 service call <service_topic> <message_type> <request>```


## Create Your First ROS 2 Package  
Learn the structure of a ROS 2 package, how to build and source it, and how to write your own nodes. You'll be using the Turtle Nest GUI tool to create packages.

#### What You'll Learn
- Create your first ROS 2 package  
- ROS 2 packages – how to create your own package  
- Building and sourcing  
- ROS 2 Nodes  

### Creating a ROS2 Package
ROS2 organizes codes via packages. If you're a python person, you can think of it as modules or a library, and if you're a C++ person, you can think of it as individual header files. As such, when building a decentralized codebase, you can simply integrate it into your system by adding a new package. This is extremely powerful but at the expense of overhead. 

Let's get started:
1. Launch the container and open a new terminal inside it.
2. Run the command ```turtle-nest``` to bring up the GUI for ROS2 package creation.

Use these settings:
- Package Name: ```ros2_exercises```
- Destination: Path to exercises_ws, example ```/home/user/exercises_ws/src```
- Package Type: ```Python``` and uncheck the C++ option
- Python Node Name: ```odometry_publisher```
- Maintainer Name: ```your_name```
- Package License: ```No license```

All the other fields can be empty or unchecked as they're not needed for this section.

### Building and Sourcing a Package
In order for ROS2 to know that you created a new package, you must first build and source the dependencies. ROS2 uses the ```colcon``` build system. 

First, navigate to your workspace:
```cd /home/user/exercises_ws/```

Build the package via:
```colcon build --symlink-install``` 

:::note
The above command builds all available packages but you can specify a ```--packages-select``` flag to choose specific packages.

ALWAYS BE IN YOUR WORKSPACE WHEN BUILDING.
:::

Source your workspace:
```source install/setup.bash```

This will build and source all the packages inside your exercises_ws -workspace. We use the --symlink-install to make our Python code symbolically linked, so that we don't have to rebuild every time we modify our code.

:::danger
You need to do this build and source step every time you relaunch your Docker container!
:::

After successfully building, you should see the following message. You can ignore the produced warning message.
![build](https://github.com/triton-droids/ros2_onboarding/raw/main/3-create_ros_2_package/images/build_warning.png)

### Details of ROS2 Package
We created our package in the exercises_ws folder. This folder is mounted inside our container in the volumes section of our docker-compose.yaml file, meaning that its contents are synced between our Ubuntu host and inside the Docker container at the $HOME/exercises_ws. All the code we write there will be automatically synchronized inside the container.

Open the exercises_ws in your favorite IDE to take a closer look at what the new package contains. You can use any IDE you want or text editor.

![directories](https://github.com/triton-droids/ros2_onboarding/raw/main/3-create_ros_2_package/images/package_structure.png)

#### ros2_exercises
This is the root path of your package and serves as the base path for all of your code.

#### ros2_exercises/odometry_publisher.py
When creating a package, there'll be a folder named exactly after the package name and this is where you place all your source code for ROS2. For C++, it'll be ```src``` folder. For this exercise, it created everything for us. 

:::info
It imports the necessary things, such as rclpy for writing ROS 2 Python code. A new Class OdometryPublisher is automatically created, that inherits a ROS 2 node to get access to features such as publishing and subscribing. In the main function, we initialize rclpy and the new node, as well as spin it in an infinite loop, which can be interrupted with CTRL-C. ROS 2 nodes "spin" to keep checking for new messages or requests so they can respond as soon as something happens.
![details](https://github.com/triton-droids/ros2_onboarding/raw/main/3-create_ros_2_package/images/odometry_node.png)
:::

#### setup.py
This is what holds all the necessary information for ROS2 system to know where your files are. It holds for example information about the existing nodes, the file path, launch files, and many more. If you add new Nodes for your package, you need to declare them here.

![setup.py](https://github.com/triton-droids/ros2_onboarding/raw/main/3-create_ros_2_package/images/setup_py.png)

#### packages.xml
This contains the metadata for your package, such as maintainer name and package description. Also, all the necessary package dependencies should be added here, such as existing core ROS packages or dependencies to your other ROS packages. The dependencies are what you use in your source code and are needed when building and running the code.

#### Running the Package
Assuming you've built and sourced the package, it'll be available to run.

Run ```ros2 run ros2_exercises odometry_publisher``` to run the package.

You'll then get a message on your termianl from the ```OdometryPublisher``` Node.
![odometrypublisher](https://github.com/triton-droids/ros2_onboarding/raw/main/3-create_ros_2_package/images/ros2_run.png)

---

## Robot Odometry  
Understand and implement robot odometry based on wheel velocities, and publish it using custom ROS 2 nodes in Python.

#### What You'll Learn
- Calculate and publish your robot's odometry using wheel velocities  
- Robot odometry and how to calculate it  
- Publish and subscribe to topics from Python code  

Odometry is a technique used to estimate a robot’s position and orientation over time. It is one of the essential things in mobile robotics, as good odometry data is often the foundation for localization, mapping and navigation. Problems in these features likely boil down to bad odometry data, which is why it is important to understand how odometry is calculated and the basic assumptions it relies on.

![odometry](https://github.com/triton-droids/ros2_onboarding/raw/main/4-robot_odometry/images/andino_odometry.png)

_How far Andino has travelled? We can answer this question by knowing how much each wheel has rotated and using this information to calculate the odometry._

### Common Types of Odometry Data

Odometry can be estimated using data from the robot’s sensors.

- Wheel Odometry
- - Uses data from wheel encoders, or other types of sensors that can keep track of the position and measure the wheel rotations. By calculating how much each wheel has rotated, the robot can estimate how far it has moved.
- Visual Odometry
- - Uses cameras or depth sensors to estimate movement by analyzing changes in images as the robot moves.
- Inertial Odometry
- - Utilizes inertial measurement units (IMUs) that provide data on acceleration and rotational velocity to estimate position changes.
- Sensor Fusion Odometry
- - Combines multiple sources (e.g., wheel encoders, IMUs, cameras) for more accurate and reliable odometry.

### Exercise: Calculate Odometry from Wheel Encoders
In this practical exercise, we’ll learn how to calculate odometry using data from simulated wheel encoders. In simulation, Andino uses Gazebo's built-in OdometryPublisher plugin to publish odometry data, but here we’ll learn to do the same calculation ourselves using Python.

Andino publishes the robot's left and right wheel positions and velocities on the /joint_states topic. We’ll use this information to estimate the robot’s position and velocity over time, just as you would on a real robot.

![topic data](https://github.com/triton-droids/ros2_onboarding/raw/main/4-robot_odometry/images/joint_states.png)

Copy paste the code below into the ```OdometryPublisher``` node found in ```odometry_publisher.py```
```py
#!/usr/bin/env python3
import math
import matplotlib.pyplot as plt

import rclpy
from rclpy.node import Node
from tf_transformations import quaternion_from_euler

from geometry_msgs.msg import Quaternion
from nav_msgs.msg import Odometry
from sensor_msgs.msg import JointState


class OdometryPublisher(Node):

    def __init__(self):
        super().__init__("odometry_publisher")
        # Use these wheel parameters for odometry calculation on Andino
        self.wheel_separation = 0.137
        self.wheel_radius = 0.033

        # Initializing the robot position and time for robot odometry calculation
        self.x = 0.0  # Robot's position on x-axis
        self.y = 0.0  # Robot's position on y-axis
        self.theta = 0.0  # Robot's orientation angle
        self.last_time = self.get_clock().now()

        # TODO: Subscribe to /joint_states topic to listen to data from left and right wheels.
        #  The message type is JointState and quality of service can be set to 10.
        #  Use self.joint_states_callback as the subscription callback.

        # TODO: Create odometry publisher. Message type is Odometry, topic can be set to
        #  /robot_odometry (not to clash with the existing Andino odometry topic) and qos to 10.

    def joint_states_callback(self, joint_states):
        # TODO: Read left and right wheel velocities from the JointState message

        # TODO: Get the elapsed time since last odometry calculation, delta time (dt), in seconds.
        #  Save current time to self.last_time

        # TODO: The wheel velocities we read from the joint_states message are angular
        #  joint velocities (rad/s). Convert them to linear velocities for each wheel by multiplying
        #  them with a wheel radius. Then calculate the robot's linear and angular velocities
        #  with the following formulas:
        #  linear velocity = (vel right + vel left) / 2.0
        #  angular velocity = (vel right - vel left) / wheel separation

        # TODO: Now that we know how much time has elapsed since the last calculation,
        #  what was robot's previous orientation angle (theta) and with what speed the
        #  robot has moved, we can calculate the new position for the robot. Find out how to
        #  calculate this for x-axis, y-axis and robot's orientation theta, and
        #  update the values in self.x, self.y and self.theta.

        # TODO: Create new Odometry message and populate stamp and frame IDs. The parent frame
        #  ID is "odom" and child frame ID is "base_link".

        # TODO: Add the updated robot's position and orientation to the Odometry message. 
        # Be careful, the Odometry message accepts the orientation in Quaternion notation!

        # TODO: Add the updated linear and angular velocities in the Odometry message

        # TODO: Publish the odometry message


def main(args=None):
    rclpy.init(args=args)

    odometry_publisher = OdometryPublisher()

    try:
        rclpy.spin(odometry_publisher)
    except KeyboardInterrupt:
        pass

    odometry_publisher.destroy_node()
    rclpy.try_shutdown()


if __name__ == '__main__':
    main()
```

and add these to ```OdometryPublisher```:
```py
self.path_visualizer = PathVisualizer() ## Inside init
self.path_visualizer.visualize(odom_msg.pose.pose.position.x, odom_msg.pose.pose.position.y) ## At the end of joint_states_callback
```

### Testing the Odometry
Drive the robot around in the simulation while visualizing the odometry data.

- Does the odometry data correspond precisely the driven path?
- Would the data be as precise on a real robot?
- Are you able to find situations where according to odometry data the robot is moving, while in simulation it isn't. If so, what could you do to improve the odometry estimation?

![data](https://github.com/triton-droids/ros2_onboarding/raw/main/4-robot_odometry/images/odometry_visualization.png)
#### Your Task
The Python code has different sections denoted with TODO-comments that you should complete.

You are to fill in the missing code pieces.

To test your solution, run the Andino simulation in a new terminal:
```ros2 launch andino_gz andino_gz.launch.py```

Then run:
```
colcon build --symlink-install
source install/setup.bash
```
You can then test via:
```ros2 run ros2_exercises odometry_publisher --ros-args -p use_sim_time:=True```

You can start and stop your node during development, without restarting the whole simulation. You also don't have to rebuild the package after every change you make, thanks to --symlink-install. Rebuild is only needed if you stop the whole Docker container.

:::info
Between each of the steps, we recommend to print out the values and drive the robot in simulation to see how they are changing over time. This will give you a better understanding of the whole solution.

For a better learning experience, we do not recommend using generative AI like ChatGPT to finish this task.

You can find the solution to this exercise below, but try to first solve it by your own. Learning to code is most effective through the process of trial, error, and overcoming challenges.
:::

<details>
<summary><strong>Solution</strong></summary>

```py
#!/usr/bin/env python3
import math
import matplotlib.pyplot as plt

import rclpy
from rclpy.node import Node
from tf_transformations import quaternion_from_euler

from geometry_msgs.msg import Quaternion
from nav_msgs.msg import Odometry
from sensor_msgs.msg import JointState


class OdometryPublisher(Node):

    def __init__(self):
        super().__init__("odometry_publisher")
        # Use these wheel parameters for odometry calculation on Andino
        self.wheel_separation = 0.137
        self.wheel_radius = 0.033

        # Initializing the robot position and time for robot odometry calculation
        self.x = 0.0  # Robot's position on x-axis
        self.y = 0.0  # Robot's position on y-axis
        self.theta = 0.0  # Robot's orientation angle
        self.last_time = self.get_clock().now()

        # Subscribe to /joint_states topic to listen to data from left and right wheels.
        #  The message type is JointState and quality of service can be set to 10.
        #  Use self.joint_states_callback as the subscription callback.
        self.joint_subscription = self.create_subscription(
            JointState, '/joint_states', self.joint_states_callback, 10
        )

        # Create odometry publisher. Message type is Odometry, topic can be set to
        #  /robot_odometry (not to clash with the existing Andino odometry topic) and qos to 10.
        self.odom_publisher = self.create_publisher(Odometry, "/robot_odometry", 10)

        self.path_visualizer = PathVisualizer()

    def joint_states_callback(self, joint_states):
        # Read left and right wheel velocities from the JointState message
        joint_names = joint_states.name
        left_wheel_index = joint_names.index("left_wheel_joint")
        right_wheel_index = joint_names.index("right_wheel_joint")
        left_wheel_vel = joint_states.velocity[left_wheel_index]
        right_wheel_vel = joint_states.velocity[right_wheel_index]

        # Get the elapsed time since last odometry calculation, delta time (dt), in seconds.
        #  Save current time to self.last_time
        current_time = self.get_clock().now()
        dt = (current_time - self.last_time).nanoseconds / 1e9
        self.last_time = current_time

        # The wheel velocities we read from the joint_states message are angular
        #  joint velocities (rad/s). Convert them to linear velocities for each wheel by multiplying
        #  them with a wheel radius. Then calculate the robot's linear and angular velocities
        #  with the following formulas:
        #  linear velocity = (vel right + vel left) / 2.0
        #  angular velocity = (vel right - vel left) / wheel separation
        v_left = left_wheel_vel * self.wheel_radius
        v_right = right_wheel_vel * self.wheel_radius
        linear_velocity = (v_right + v_left) / 2.0
        angular_velocity = (v_right - v_left) / self.wheel_separation

        # Now that we know how much time has elapsed since the last calculation,
        #  what was robot's previous orientation angle (theta) and with what speed the
        #  robot has moved, we can calculate the new position for the robot. Find out how to
        #  calculate this for x-axis, y-axis and robot's orientation theta, and
        #  update the values in self.x, self.y and self.theta.
        delta_x = linear_velocity * math.cos(self.theta) * dt
        delta_y = linear_velocity * math.sin(self.theta) * dt
        delta_theta = angular_velocity * dt

        self.x += delta_x
        self.y += delta_y
        self.theta += delta_theta

        # Create new Odometry message and populate stamp and frame IDs. The parent frame
        #  ID is "odom" and child frame ID is "base_link".
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time.to_msg()
        odom_msg.header.frame_id = "odom"
        odom_msg.child_frame_id = "base_link"

        # Add the updated robot's position and orientation to the Odometry message
        # Be careful, the Odometry message accepts the orientation in Quaternion notation!
        odom_msg.pose.pose.position.x = self.x
        odom_msg.pose.pose.position.y = self.y
        odom_msg.pose.pose.position.z = 0.0
        odom_quat = quaternion_from_euler(0, 0, self.theta)
        odom_msg.pose.pose.orientation = Quaternion(
            x=odom_quat[0], y=odom_quat[1], z=odom_quat[2], w=odom_quat[3]
        )

        # Add the updated linear and angular velocities in the Odometry message
        odom_msg.twist.twist.linear.x = linear_velocity
        odom_msg.twist.twist.linear.y = 0.0
        odom_msg.twist.twist.angular.z = angular_velocity

        # Publish the odometry message
        self.odom_publisher.publish(odom_msg)

        self.path_visualizer.visualize(odom_msg.pose.pose.position.x, odom_msg.pose.pose.position.y)


class PathVisualizer:
    def __init__(self):
        plt.ion()
        self.fig, self.ax = plt.subplots()

        # Lock the aspect ratio and set equal scaling for x and y
        self.ax.set_aspect('equal', adjustable='box')

        self.path_x, self.path_y = [], []

    def visualize(self, x, y):
        # Store position history
        self.path_x.append(x)
        self.path_y.append(y)

        # Plot path
        self.ax.clear()
        self.ax.plot(self.path_x, self.path_y, 'b-', label='Path')
        self.ax.plot(x, y, 'ro', label='Current Position')  # Mark current position
        self.ax.set_xlabel('X Position (m)')
        self.ax.set_ylabel('Y Position (m)')
        self.ax.set_title('Traversed Path')
        self.ax.legend()
        plt.draw()
        plt.pause(0.001)  # Short pause to update plot


def main(args=None):
    rclpy.init(args=args)

    odometry_publisher = OdometryPublisher()

    try:
        rclpy.spin(odometry_publisher)
    except KeyboardInterrupt:
        pass

    odometry_publisher.destroy_node()
    rclpy.try_shutdown()


if __name__ == '__main__':
    main()
```

</details>

### Visualizing the Driven Path
Once you are done with your solution, you can visualize the calculated odometry by drawing the robot positions. This will help you to verify your solution and also get a better understanding how odometry data works, and what are the possible drawbacks of it.

To visualize the driven path using matplotlib, add the following class to your code:

```py
class PathVisualizer:
    def __init__(self):
        plt.ion()
        self.fig, self.ax = plt.subplots()

        # Lock the aspect ratio and set equal scaling for x and y
        self.ax.set_aspect('equal', adjustable='box')

        self.path_x, self.path_y = [], []

    def visualize(self, x, y):
        # Store position history
        self.path_x.append(x)
        self.path_y.append(y)

        # Plot path
        self.ax.clear()
        self.ax.plot(self.path_x, self.path_y, 'b-', label='Path')
        self.ax.plot(x, y, 'ro', label='Current Position')  # Mark current position
        self.ax.set_xlabel('X Position (m)')
        self.ax.set_ylabel('Y Position (m)')
        self.ax.set_title('Traversed Path')
        self.ax.legend()
        plt.draw()
        plt.pause(0.001)  # Short pause to update plot
```
---

Add these two lines to your ```OdometryPublisher``` Node:
```py
self.path_visualizer = PathVisualizer() ## inside init
self.path_visualizer.visualize(odom_msg.pose.pose.position.x, odom_msg.pose.pose.position.y) ## At the end of joint_states_callback
```

### Test the Odometry
Drive the robot around in the simulation while visualizing the odometry data.

- Does the odometry data correspond precisely the driven path?
- Would the data be as precise on a real robot?
- Are you able to find situations where according to odometry data the robot is moving, while in simulation it isn't. If so, what could you do to improve the odometry estimation?

![data](https://github.com/triton-droids/ros2_onboarding/raw/main/4-robot_odometry/images/odometry_visualization.png)

## Path Planning  
Explore motion planning with `Nav2`, tune parameters, and implement basic custom path planners.

#### What You'll Learn
- Basic navigation concepts  
- Modify Nav2 parameters  
- Custom path planning using Nav2

Path planning is a common problem in robotics that focuses on finding the best route for a robot to move from a start point to a goal, avoiding obstacles along the way. In ROS 2, this is typically achieved using the Nav2 stack, which combines sensor data, maps, and algorithms to calculate and execute paths dynamically. Path planning is a core concept for autonomous navigation, enabling robots to operate in complex environments.

In this exercise, you will get an overview of what path planning is and how it is implemented in ROS 2. You will implement a "Hello World" of the path planning, by creating the simplest form of planner: the Straight Line Planner.

The Straight Line Planner will plan the path between two points, without considering any obstacles on the way. This will give you an understanding of how new path planning algorithms can be implemented using ROS 2, enabling you to take things further on your own.

### Basic Concepts
#### Static Map
A 2D grid-based representation of the environment, where each cell is marked as free, occupied, or unknown. It is used for global navigation planning and obstacle avoidance.

![static](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/static_map.png)

#### Global Costmap
The global costmap represents the entire known environment, highlighting obstacles and free space. It helps the planner find a viable path at a high level.

![global](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/global_costmap.png)

#### Local Costmap
The local costmap focuses on the area immediately surrounding the robot. It dynamically updates with sensor data to handle unexpected obstacles and ensure safe navigation.

![local](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/local_costmap.png)

#### Path Planner
The path planner computes a path from the robot’s start point to its goal while considering the global costmap. In this exercise, you'll implement a basic straight-line planner to understand the fundamentals of path planning algorithms. The produced path is often referred to as the "Global Plan".

![planner](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/global_plan.png)

#### Controller
The controller translates the planned path into low-level motion commands, such as velocity and direction, to guide the robot in real-time.

![controller](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/local_plan.png)

#### Behavior Trees
Behavior trees define how the robot should react in different situations by structuring its actions and decisions hierarchically. They enable complex behaviors like re-planning when obstacles block the path.

![bt](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/bt.png)

:::info
By this point, we expect you to be familiar on how to start a Docker container using docker compose up, and how to open a new terminal inside it using exec. From now on in the instructions, we won't necessarily separately specify to run the commands, or to open new terminal inside the Docker container. All the commands are expected to be run inside the Docker, unless otherwise specified.

Inside our robotics_essentials_ros2 container we have two ROS workspaces. In the exercises_ws we are adding our custom packages and code. In the ros2_ws we are keeping all of our external dependencies, like the andino_gz package.
:::

### Building our Path Planner
We'll be using Nav2 to accomplish this. As you have seen in previous demos, Nav2 has been integrated with Andino already. In general, it is simple to take Nav2 and set it up with an existing robot. Two main steps are needed to do this:

- Launch file that brings up Nav2 stack
- Parameter file that configures all the Nav2 parameters

To view the contents of the launch file:
```cat $HOME/ros2_ws/src/andino_gz/andino_gz/launch/andino_gz.launch.py```

:::note
Note: we are now using ros2_ws instead of exercises_ws. You can find here external dependencies used for this course, such as andino_gz
:::


Another way is to check the source code directly in the ![Andino GitHub repository](https://github.com/Ekumen-OS/andino_gz/blob/humble/andino_gz/launch/andino_gz.launch.py). You can either check the code straight in your browser, or clone the package and open it in your favourite IDE.

![github repo](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/nav2_bringup.png)

This part invokes a Nav2 launch file called bringup_launch.py, that further starts all the nodes needed for navigation; planner, controller, behavior trees, etc.

To view the contents of the parameter file:
```cat $HOME/ros2_ws/src/andino_gz/andino_gz/config/nav2_params.yaml```

This file includes all the parameters that we pass for Nav2 nodes, for example for amcl, controller_server and planner_server. Take a moment to view what kind of parameters these Nodes take in.

#### Straight Line Planner
Let's replace the existing path planner with our custom implementation.

Nav2, by default, supports adding new path planners by implementing a plugin with C++. To keep this course's programming language consistent, we are using Python instead. We have implemented for you a new C++ Nav2 plugin [(take a look at it here)](https://github.com/triton-droids/ros2_onboarding/blob/main/packages/custom_nav2_planner/src/custom_nav2_planner.cpp) that requests a new plan by calling a ROS 2 service. This approach allows us to implement our path planner in Python by simply creating a service that:

- Waits for new service requests
- Gets a robot's starting pose and goal pose in a service request
- Responds with a plan

We also have access to the global costmap, which normally would be used for path planning to plan around the obstacles, but for simplicity we omit using it, and instead create a plan just between two points.

With all this information available, we are ready to start calculating new paths for our robot.

If you are interested to check the original implementation of the Straight Line Planner in C++, you can find it from the [Nav2 documentation](https://docs.nav2.org/plugin_tutorials/docs/writing_new_nav2planner_plugin.html).

#### Change the Planner
Let's get started by manually changing the planner for Andino in the Nav2 parameter file that is found inside the andino_gz package.

1. Open Andino's parameter file with your favorite text editor. We will use nano as an example: ```nano $HOME/ros2_ws/src/andino_gz/andino_gz/config/nav2_params.yaml```
2. Find the place where planner_server parameters are set. Comment out the existing planner_server parameters and replace them with the following: 
```
planner_server:
 ros__parameters:
   plugins: ["GridBased"]
   use_sim_time: True
   GridBased:
     plugin: "custom_nav2_planner/CustomPlanner"
```

It should look like below after. (This replaces the originally used NavfnPlanner with our [CustomPlanner](https://github.com/triton-droids/ros2_onboarding/blob/main/packages/custom_nav2_planner/src/custom_nav2_planner.cpp) implementation.)
![params](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/nav2_planner_params.png)

3. Save the file
4. Build and source 
```
cd $HOME/ros2_ws/
colcon build
source install/setup.bash
```

:::danger
Note for Docker users! If you rebuild or remove your Docker container, these changes won't persist. In this case, you will have to run these steps to change the planner again!
:::

#### Verify the planner has changed
To verify our planner has changed, follow these steps:

1. Launch the simulation ```ros2 launch andino_gz andino_gz.launch.py nav2:=True```
2. Start the simulation, give a pose estimate for the robot, and try to give a Nav2 goal to autonomously navigate. You should see that your robot does not plan any path, since our custom Straight Line Planner is not yet implemented.

![custom_planner](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/no_plan.png)

You should also see a warning logger message

![warning](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/service_not_available.png)

##### Interestingly, few seconds after sending the goal, you will notice that your robot will start moving a little. Why is that?

Nav2 has a behavior server running to have recovery behaviors if a plan could not be calculated. This is useful for example if the robot is stuck in a way that it is not possible to calculate the path, or the goal is not reachable. During recovery behaviors, the robot will for example try to spin and back up a little, to try to get unstuck.

### Creating Straight Line Planner
To add our custom code for the new path planner, let's first create a new Python ROS 2 package. You can stop your simulation launch with CTRL+C and follow these steps

1. Run Turtle Nest: ```turtle-nest```
2. Create a new package with the following options:
- - Package Name: ```path_planner_example```
- - Destination: ```/home/user/exercises_ws/src```
- - Note: ```exercises_ws```, not ros2_ws
- - Package type: ```Python```, uncheck C++
- - Python Node Name: ```path_planner_node```
- - License: ```No License```
3. Once the package has been created, build and source it:
```bash
cd $HOME/exercises_ws/
colcon build --symlink-install
source install/setup.bash
```
4. Verify that everything went smoothly by running the node:
```
ros2 run path_planner_example path_planner_node --ros-args -p use_sim_time:=True
```

You should see a Hello World message from the node.

![hello_world](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/hello_world.png)

#### Implementation of Straight Line Planner
Now, it is time to start implementing the actual code for the planner.

Open your Node in your favorite IDE. You will find it on your host machine, outside the container in $HOME/exercises_ws/src/path_planner_example/path_planner_example/path_planner_node.py.

Use the code below as a starting template:
```py
#!/usr/bin/env python3
import rclpy
from rclpy.node import Node

from nav_msgs.msg import Path
from geometry_msgs.msg import PoseStamped
from create_plan_msgs.srv import CreatePlan
from nav2_simple_commander.robot_navigator import BasicNavigator


class PathPlannerNode(Node):

    def __init__(self):
        super().__init__("path_planner_node")
        # self.basic_navigator = BasicNavigator()  # Can be uncommented to get Global Costmap in create_plan_cb

        # Creating a new service "create_plan", which is called by our Nav2 C++ planner plugin
        # to receive a plan from us.
        self.srv = self.create_service(CreatePlan, 'create_plan', self.create_plan_cb)

    def create_plan_cb(self, request, response):
        # Getting all the information to plan the path
        goal_pose = request.goal
        start_pose = request.start
        time_now = self.get_clock().now().to_msg()
        # global_costmap = self.basic_navigator.getGlobalCostmap()  # Can be uncommented to get Global CostMap

        print("----")
        print(f"Starting pose: ({start_pose.pose.position.x}, {start_pose.pose.position.y})")
        print(f"Goal pose: ({goal_pose.pose.position.x}, {goal_pose.pose.position.y}))")

        response.path = create_straight_plan(start_pose, goal_pose, time_now)
        return response

def create_straight_plan(start, goal, time_now):
    """ 
    Creates a straight plan between start and goal points.
    Does not use the global costmap to plan around obstacles, as normal planners would.
    """
    path = Path()

    # TODO Set the frame_id and stamp for the Path header. Use frame_id from the goal header,
    #  and time_now for the current time.

    # Let's create a straight plan between our start and goal poses.
    # It is not enough if we provide only the start and end positions as a path.
    # For controller to follow path correctly, we will need to provide also
    # points along this straight path with small intervals. There is a function
    # "interpolate_coordinates" implemented for you that does this. It only needs
    # the coordinates in a tuple format, for example:
    # interpolate_coordinates((0, 0), (0, 0.5))
    # This will give you coordinates between these two points with 0.1 interval:
    # [(0.0, 0.0), (0.0, 0.1), (0.0, 0.2), (0.0, 0.3), (0.0, 0.4), (0.0, 0.5)]
    # TODO Interpolate the coordinates between start and goal positions
    
    # TODO Loop through these interpolated coordinates and create a new PoseStamped()
    #  message for each of them. You can set the same stamp and frame_id as for the Path().
    #  Finally, add all of these points into the path.poses -array.

    return path

def interpolate_coordinates(start, end, increment=0.1):
    """
    Interpolate coordinates between two points with a fixed increment.
    This method calculates the coordinates of the points on the straight-line path that we are computing.

    Args:
        start (tuple): Starting coordinate (x1, y1).
        end (tuple): Ending coordinate (x2, y2).
        increment (float): Distance between interpolated points.

    Returns:
        list: List of interpolated points as (x, y) tuples.
    """
    x1, y1 = start
    x2, y2 = end

    # Calculate total distance using the Euclidean formula
    dx = x2 - x1
    dy = y2 - y1
    distance = (dx ** 2 + dy ** 2) ** 0.5

    # Calculate the number of steps
    num_steps = int(distance / increment)

    # Generate interpolated points
    points = []
    for i in range(num_steps + 1):  # +1 to include the end point
        t = i / num_steps  # Normalized step (0.0 to 1.0)
        x = x1 + t * dx  # Linear interpolation for x
        y = y1 + t * dy  # Linear interpolation for y
        points.append((x, y))

    return points


def main(args=None):
    rclpy.init(args=args)
    path_planner_node = PathPlannerNode()

    try:
        rclpy.spin(path_planner_node)
    except KeyboardInterrupt:
        pass

    path_planner_node.destroy_node()
    rclpy.try_shutdown()


if __name__ == '__main__':
    main()
```

#### Your Task
Run the simulation in one terminal, and the new PathPlannerNode in another one with the following commands:
- ```ros2 launch andino_gz andino_gz.launch.py nav2:=True```
- ```ros2 run path_planner_example path_planner_node --ros-args -p use_sim_time:=True```

Start the simulation, give a pose estimation and a new Nav2 goal. You will see your node now printing start and goal positions with a certain interval. Nav2 keeps requesting replanning of the path periodically by default.

Go through the main parts of code and read the comments to understand what is currently implemented. Start following TODO's to fill up the parts that are missing to produce a full path

The node consists of 3 main parts:

1. ```create_plan_cb()```: This is our service callback. When Nav2 requests for a new path, this function will be called with a request containing the start position and goal position.

2. ```create_straight_plan()```: This is our main function to do the path planning in, and the only place you need to modify. Without any changes, it returns an empty path.

3. ```interpolate_coordinates```: This function calculates intermediate points on a line between start and goal positions, with a 0.1 meters interval by default. You do not need to fully understand the contents of this function, only the way how it can be used.

<details>
<summary><strong>Solution</strong></summary>

```py
#!/usr/bin/env python3
import rclpy
from rclpy.node import Node

from nav_msgs.msg import Path
from geometry_msgs.msg import PoseStamped
from create_plan_msgs.srv import CreatePlan
from nav2_simple_commander.robot_navigator import BasicNavigator


class PathPlannerNode(Node):

    def __init__(self):
        super().__init__("path_planner_node")
        # self.basic_navigator = BasicNavigator()  # Can be uncommented to get Global Costmap in create_plan_cb

        # Creating a new service "create_plan", which is called by our Nav2 C++ planner plugin
        # to receive a plan from us.
        self.srv = self.create_service(CreatePlan, 'create_plan', self.create_plan_cb)

    def create_plan_cb(self, request, response):
        # Getting all the information to plan the path
        goal_pose = request.goal
        start_pose = request.start
        time_now = self.get_clock().now().to_msg()
        # global_costmap = self.basic_navigator.getGlobalCostmap()  # Can be uncommented to get Global CostMap

        response.path = create_straight_plan(start_pose, goal_pose, time_now)
        return response

def create_straight_plan(start, goal, time_now):
    """ 
    Creates a straight plan between start and goal points.
    Does not use the global costmap to plan around obstacles, as normal planners would.
    """
    path = Path()

    # Set the frame_id and stamp for the Path header. Use frame_id from the goal header,
    #  and time_now for the current time.
    path.header.frame_id = goal.header.frame_id
    path.header.stamp = time_now

    # Let's create a straight plan between our start and goal poses.
    # It is not enough if we provide only the start and end positions as a path.
    # For controller to follow path correctly, we will need to provide also
    # points along this straight path with small intervals. There is a function
    # "interpolate_coordinates" implemented for you that does this. It only needs
    # the coordinates in a tuple format, for example:
    # interpolate_coordinates((0, 0), (0, 0.5))
    # This will give you coordinates between these two points with 0.1 interval:
    # [(0.0, 0.0), (0.0, 0.1), (0.0, 0.2), (0.0, 0.3), (0.0, 0.4), (0.0, 0.5)]
    # Interpolate the coordinates between start and goal positions
    interpolated_coordinates = interpolate_coordinates(
        (start.pose.position.x, start.pose.position.y),
        (goal.pose.position.x, goal.pose.position.y),
    )
    
    # Loop through these interpolated coordinates and create a new PoseStamped()
    #  message for each of them. You can set the same stamp and frame_id as for the Path().
    #  Finally, add all of these points into the path.poses -array.
    for point in interpolated_coordinates:
        pose = PoseStamped()
        pose.pose.position.x = point[0]
        pose.pose.position.y = point[1]
        pose.header.stamp = time_now
        pose.header.frame_id = goal.header.frame_id
        path.poses.append(pose)

    return path

def interpolate_coordinates(start, end, increment=0.1):
    """
    Interpolate coordinates between two points with a fixed increment.
    This method calculates the coordinates of the points on the straight-line path that we are computing.
    
    Args:
        start (tuple): Starting coordinate (x1, y1).
        end (tuple): Ending coordinate (x2, y2).
        increment (float): Distance between interpolated points.

    Returns:
        list: List of interpolated points as (x, y) tuples.
    """
    x1, y1 = start
    x2, y2 = end

    # Calculate total distance using the Euclidean formula
    dx = x2 - x1
    dy = y2 - y1
    distance = (dx ** 2 + dy ** 2) ** 0.5

    # Calculate the number of steps
    num_steps = int(distance / increment)

    # Generate interpolated points
    points = []
    for i in range(num_steps + 1):  # +1 to include the end point
        t = i / num_steps  # Normalized step (0.0 to 1.0)
        x = x1 + t * dx  # Linear interpolation for x
        y = y1 + t * dy  # Linear interpolation for y
        points.append((x, y))

    return points


def main(args=None):
    rclpy.init(args=args)
    path_planner_node = PathPlannerNode()

    try:
        rclpy.spin(path_planner_node)
    except KeyboardInterrupt:
        pass

    path_planner_node.destroy_node()
    rclpy.try_shutdown()


if __name__ == '__main__':
    main()

```
</details>

If it is correct, you should be able to create a straight path that the robot follows.

![sol](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/straight_plan.png)

![sol_2](https://github.com/triton-droids/ros2_onboarding/raw/main/5-path_planning/images/straight_plan_through_obstacle.png)

:::info
If you wish, you can try to improve the path planning by also using the global costmap to plan around obstacles in the environment. You can for example implement some of the popular path planning algorithms, such as Dijkstra or A*. 

Make sure that your path planning algorithm is fast and efficient. Otherwise the path planning might time out, if the path calculation takes for too long.

Good luck!
:::
