## 1.	System requirements

**CPU**: 12th Gen Intel(R) Core(TM) i7-12700H   2.30 GHz

**RAM size**: 32.0 GB

**Windows version**: Windows 11

## 2.	Installation instructions

Open an Administrator Command Prompt (right click and select "Run as Administrator"), then run the following command:

### Chocolatey

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### LTS version of Node

### Java SE Development Kit (JDK)

```bash
choco install -y nodejs-lts microsoft-openjdk17
```

### React Native CLI

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

### Android Studio

>**Go to download Android Studio on website:** 

https://developer.android.com/studio?gclid=EAIaIQobChMIh4OskfndgwMVBB6tBh2LXQ3BEAAYASAAEgJyBfD_BwE&gclsrc=aw.ds

While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

1. Android SDK
2. Android SDK Platform
3. Android Virtual Device
4. If you are not already using Hyper-V: Performance (Intel ® HAXM)


>**Open Android Studio, click on "More Actions" button and select "SDK Manager".**

_"SDK Platforms" tab_, then check the box next to "Show Package Details". 

Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:

- Android SDK Platform 33
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

_"SDK Tools" tab_, then check the box next to "Show Package Details".

Look for and expand the Android SDK Build-Tools entry, then make sure that the following item is checked:

- 33.0.0 

Finally, click "Apply" to download and install the Android SDK and related build tools.


## 3.	Configuration steps

**Configure the ANDROID_HOME environment variable**

1.	Open the Windows Control Panel.
2.	Click on User Accounts, then click User Accounts again
3.	Click on Change my environment variables
4.	Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

The SDK is installed, by default, at the following location:

```bash
%LOCALAPPDATA%\Android\Sdk
```


**Ensure the ANDROID_HOME environment variable is loaded**

_Open powershell:_

1.	Copy and paste Get-ChildItem -Path Env:\ into powershell
2.	Verify ANDROID_HOME has been added


**Add platform-tools to Path**

_Open Windows Control Panel:_

1.	Click on User Accounts, then click User Accounts again
2.	Click on Change my environment variables
3.	Select the Path variable.
4.	Click Edit.
5.	Click New and add the path to platform-tools to the list.

The default location for this folder is:

```bash
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

## 4.	Project creation

_Open a new Command Prompt window:_

```bash
npx react-native@latest init AwesomeProject
```

## 5.	Running the project

_Open Android Studio:_

Select "Create Virtual Device...", then pick any Phone from the list and click "Next", then select the Tiramisu API Level 33 image.

Click "Next" then "Finish" to create your AVD. At this point you should be able to click on the green triangle button next to your AVD to launch it, then proceed to the next step.

_Open a new Command Prompt window:_

```bash
npm start
npm run android
```

## 6.	Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

## 7.	Resources


To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
