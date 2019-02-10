See Our Sun
=====
### Addressing: [See Our Sun](https://github.com/amnh/HackTheSolarSystem/wiki/See-Our-Sun)

### Created by: *Staring at the Sun*
* Tom Lavenziano - https://github.com/TomLavenziano
* Rajendra Bhagroo - https://github.com/RajendraBhagroo
* Connor Couetil - https://github.com/couetilc
* Peter Locharernkul - https://github.com/pichya

![Screenshot](https://github.com/HackTheSolarSystem/SeeOurSun/blob/master/2019-02-10-12:59:19-screenshot.png)

### Solution Description

The Solar Dynamics Observatory takes photographs of the Sun 24/7. These photos are publically available, yet large and diffiult to obtain. Historically, OpenSpace has been unable to utilize these photographs, but with our project it can.

The core challenge was comprised of two parts. The first challenge was to get the sun data from NASA and transform it to be used in OpenSpace. This was achieved by creating an npm package called *Solis*. This package operates as either an npm module that can be imported into any new or existing OpenSpace script, or as a standalone executable CLI application. It takes in parameters from the user regarding which source to use specifically and at which wavelength. Solis finds the associated sun data/files from the Helioviewer API and retrieves the files, at which point they're moved into either a user designated output folder or into a default ./output folder. 

The second challenge that we solved was to build an interface within OpenSpace that allows the user to retrieve the sun data while remaining in the same system. This was achieved by adding a custom secondary interface to OpenSpace's WebGuiFrontend component. This was done by utilizing the pre-loaded ReactJS framework to build out the UI. After the user enters their desired parameters into the ReactJS interface, the internal NodeJS server executed a script stored in the WebGuiBackend to  activate the Solis module and retrive the data. The data is subsequently loaded into OpenSpace and the sun is rendered with this near-live data.

### Installation Instructions

#### Installing the "Solis" package

Add the "solis" package using npm:

```bash
npm install @tomlavenziano/solis
```

#### Installing OpenSpace-WebGuiFrontend

Requires a pull request to https://github.com/OpenSpace/OpenSpace-WebGuiFrontend.

The files within OpenSpace-WebGuiFrontend are the only modified files from the original repo.

#### Installing OpenSpace-WebGuideBackend

Requires a pull request to https://github.com/OpenSpace/OpenSpace-WebGuiBackend

The files within OpenSpace-WebGuiBackend are the only modified files from the original repo.
