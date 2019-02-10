## See Our Sun

### Addressing: [See Our Sun](https://github.com/amnh/HackTheSolarSystem/wiki/See-Our-Sun)

### Created by: *Staring at the Sun*
* Tom Lavenziano - https://github.com/TomLavenziano
* Rajendra Bhagroo - https://github.com/RajendraBhagroo
* Connor Couetil - https://github.com/couetilc
* Peter Locharernkul - https://github.com/pichya

### Solution Description

We created an npm package "solis" to download up-to-date imagery of the Sun from the Helioview API. We added an interface in OpenSpace's React.js WebGuiFrontend to execute a Node.js script stored in the WebGuiBackend to initiate this download.

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
