.. image:: docs/imgs/logo.png
   :alt: Logo

========================
Nadege Lemperiere portal
========================

.. image:: https://img.shields.io/website-up-down-green-red/https/technogix.io.svg
   :target: https://technogix.io
   :alt: Website

About The Project
=================

This project provides a set of robotframework keywords used to check the results of terraform deployments.

.. image:: https://badgen.net/github/checks/nadegelemperiere/portal
   :target: https://github.com/nadegelemperiere/portal/actions/workflows/release.yml
   :alt: Status
.. image:: https://img.shields.io/static/v1?label=license&message=Proprietary&color=informational
   :target: ./LICENSE
   :alt: License
.. image:: https://badgen.net/github/commits/nadegelemperiere/portal/main
   :target: https://github.com/nadegelemperiere/portal
   :alt: Commits
.. image:: https://badgen.net/github/last-commit/nadegelemperiere/portal/main
   :target: https://github.com/nadegelemperiere/portal
   :alt: Last commit

Built With
----------

.. image:: https://img.shields.io/static/v1?label=React&message=17.0.2&color=informational
   :target: https://reactjs.org/
   :alt: React
.. image:: https://img.shields.io/static/v1?label=Node.js&message=8.3.1&color=informational
   :target: https://nodejs.org/en/
   :alt: Node.js
.. image:: https://img.shields.io/static/v1?label=material-ui&message=5.4.0&color=informational
   :target: https://mui.com/material-ui/getting-started/installation
   :alt: Material-UI

Principle
=========

This project releases a container containing the react website served using nginx.

It also triggers an AWS amplify service that will build and publish the website

Prerequisites
=============

The development of this website uses the node alpine container. You shall be able to retrieve it from the docker hub using :

.. code:: bash
    docker pull node:alpine-latest

Development
===========

Using the script provided in [scripts/start.sh](scripts/start.sh)

Packaging
=========

The production server used is Nginx. The application is built using node.js, then served by nginx. To release the container, you just has to build it from the provided dockerfile.

Publication
===========

The target publication is an AWS amplify application. The CI/CD pipeline is designed to automatically retrieve the AWS amplify webhook from the terraform backend bucket located in AWS infrastructure.

A standard build triggers the AWS amplify "develop" branch, that will then retrieve the source code on the github repository develop branch and publish it for testing purpose through a secured access.

A release triggers the AWS amplify "main" branch that will update the website in production.

Testing
=======


.. image:: https://codecov.io/gh/nadegelemperiere/portal/branch/main/graph/badge.svg?token=MCRQQ7PXI2
   :target: https://codecov.io/gh/nadegelemperiere/portal
   :alt: codecov

Security
========

The build pipelines applies SAST and third party vulnerabilities analysis

The develop branch website will be regularly tested for vulnerabilities using zaproxy as DAST.

Issues
======

.. image:: https://img.shields.io/github/issues/nadegelemperiere/portal.svg
   :target: https://github.com/nadegelemperiere/portal/issues
   :alt: Open issues
.. image:: https://img.shields.io/github/issues-closed/nadegelemperiere/portal.svg
   :target: https://github.com/nadegelemperiere/portal/issues
   :alt: Closed issues

Known limitations
=================

Those keywords are intended for relatively small infrastructures, since it most of the times retrieve all elements for analyze and does use pagination to perform a batch analysis.

Roadmap
=======

Contributing
============

.. image:: https://contrib.rocks/image?repo=nadegelemperiere/portal
   :alt: GitHub Contributors Image

This website is dedicated to self  promotion. No contribution is required.

License
=======

This code is under copyright.

Contact
=======

Nadege Lemperiere - nadege.lemperiere@gmail.com

Acknowledgments
===============

This application was built using :


.. image:: https://img.shields.io/static/v1?label=react-create-app&message=latest&color=informational
   :target: https://github.com/facebook/create-react-app
   :alt: create-react-app
.. image:: https://img.shields.io/static/v1?label=react-most-wanted&message=latest&color=informational
   :target: https://github.com/TarikHuber/react-most-wanted/
   :alt: react-most-wanted