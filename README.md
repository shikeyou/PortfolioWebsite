# Portfolio Website

---

## Introduction

This is Project 1 for Udacity's Front-End Web Developer Nanodegree.

Main objectives of this project:

* Given a website mockup PDF file, create the website using HTML and CSS
* Website must be responsive

## Online Live View

The website is available online for viewing at [http://shikeyou.github.io/PortfolioWebsite/](http://shikeyou.github.io/PortfolioWebsite/)

## Features

* Fully responsive website which works on small mobile screens (single column) to large desktop screens (three columns)
* Images of an appropriate resolution are selected automatically based on screen width and device pixel density i.e. not showing an extremely large image on a very small screen
* Using grunt and grunt-responsive-images for image scaling pipeline: smaller images of various resolutions are easily created by a single command

## Requirements

You will need these installed in your computer:

* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php)
* [Grunt](http://gruntjs.com/getting-started)

## Files

These are the files/folders that come with this project:

* **index.html:** The main HTML5 file which contains the structure of the website

* **css/styles.css:** The main CSS file which contains the necessary styles for this project

* **images-src:** This is the source images folder which contains image files for scaling (scaled images will be put into the *images* folder)

* **images:** This is the images folder that *index.html* will reference from

* **Gruntfile.js:** This specifies the "responsive_images" grunt task which automatically scales images in the *images-src* folder into smaller resolutions for different screen widths and device pixel densities in the *images* folder

* **package.json:** A standard package file required by *npm* to install depedency modules (*grunt* and *grunt-responsive-images* in this case)

## External Modules Used

* [picturefill](http://scottjehl.github.io/picturefill/) - a polyfill that helps support the `<picture>` element in non-supported browsers

    NOTE: picturefill currently [does not work in Mozilla FireFox 38 and 39 due to some bugs which will be fixed in 40](https://github.com/scottjehl/picturefill#the-gotchas).

* [normalize.css](http://necolas.github.io/normalize.css/) - for more consistent rendering of elements across different browsers


## Running The Project

NOTE: Steps 2 and 3 are optional. The scaled images are already included in this repository. These steps are included here only for completeness.

1. Clone the repository

2. Install the necessary grunt modules by typing this in a shell:

        > npm install

    A *node_modules* folder should be created which contains necessary grunt files.

3. Run the responsive-images grunt task:

        > grunt

    Scaled images for various screen widths and device pixel densities will be created automatically in the *images* folder.

4. Open *index.html* in a web browser (Google Chrome is recommended)


## Validation

This project has been [HTML](https://validator.w3.org/nu/?showsource=yes&useragent=Validator.nu%2FLV+http%3A%2F%2Fvalidator.w3.org%2Fservices&doc=http%3A%2F%2Fshikeyou.github.io%2FPortfolioWebsite%2F) and [CSS](https://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fshikeyou.github.io%2FPortfolioWebsite%2F&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en) validated.

NOTE: The 2 CSS errors are due to a [bug in the CSS validator](https://www.w3.org/Bugs/Public/show_bug.cgi?id=18913) which cannot handle the calc() function

