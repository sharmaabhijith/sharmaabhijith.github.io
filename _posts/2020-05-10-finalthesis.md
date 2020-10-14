---
title: "Hardware Implementation of Model  Predictive Controller"
date: 2020-05-10
tags: [Research Projects]
excerpt: "Control, Optimisation"
mathjax: "true"
---
<div class="image123">
    <center><img src="/images/mpc.PNG" height="350" width="350"></center>
</div>
<br />
The model predictive control (MPC) has become a hot cake technology for various applications due to its ability to handle multi input multi output (MIMO) system with
physical constraints. The output is formulated by solving constrained Quadratic Programming (QP) problem at every sampling instant to minimize the error between predicted 
outputs and the reference input by using minimum control energy. 

The are many challenges for real time implemenation of MPC. The optimization solvers require considerable amount of time which limits its embedded implementation on 
platforms like FPGA’s or micro controllers for real time dynamic systems. In this thesis we propose
an embedded implementation of extended penalty method (ePM) as a solver for Linear MPC. This solver will reduce the burden of implementation of MPC on hardware
with reduction in time requirement for solving underlying QP problem. The results are compared with a frequently used approach of active set method (ASM), Quadprog,
a MATLAB defined constrained optimization solver which works on Interior Point and trust region based methods assists in the verification of results. 

We show the performance of LMPC with the mentioned solvers by analyzing the response on basis of accuracy, time complexity and ease of hardware implementation on STM32 ARM
micro-controller. The Quasi Newton method is infused into the proposed solver ePM for solving the dual minimization problem. The results are presented for a Citation
aircraft control, Coupled Tank system and Anesthesia system problem to validate the proposed ePM solver with quadprog and ASM solver. A standard bench mark problem
also is also considered for further validation. The results suggests that the proposed solver performs significantly well during Harware-In-Loop simulations in simulink.

The report below is the documentation of the work that I have done as a part of the Btech Project Thesis.

<iframe src="https://drive.google.com/file/d/1lD_p5XET4-kjFte04ijr6cp4vrU3vqoL/preview" width="640" height="480"></iframe>
