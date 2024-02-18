# mfa-demo

# This is a client side rendering of Micro front ends applications 
Micro Front Ends Applications consists of one host/shell/parent and multiple remotes.
We have used the client side way of rendering the front end applications.
In this case the host applications application is "shell-app"(derived the names from respective angular.json) which is a angular application and it contains references to these these remotes on its home page
# 1.side-nav-bar (Angular App)

https://experts-ui.github.io/Angular-SideNav
GITHUB REPO LINK - https://github.com/experts-ui/Angular-SideNav
# 2.top-nav-header(Angular App )(This is actually the footer)
https://experts-ui.github.io/Angular-Footer
GITHUB REPO LINK - https://github.com/experts-ui/Angular-Footer
# 3.item-details(Angular App)
https://experts-ui.github.io/AngularItemDetails
GITHUB REPO LINK - https://github.com/experts-ui/AngularItemDetails
# 4.top-nav(React App)
https://experts-ui.github.io/ReactTopNavMFE
GITHUB REPO LINK - https://github.com/experts-ui/ReactTopNavMFE
# 5.shell-app(Angular App)
https://experts-ui.github.io/mfa-demo/
GITHUB REPO LINK - https://github.com/experts-ui/mfa-demo

# Deployments of Applications Using GitHub Pages For All Repos(Hosts And Remotes)
1.First create separate repos for each application
Ex:Angular-SideNav 
2.Clone the repo in the local using the url
git clone https://github.com/experts-ui/Angular-SideNav.git

3.Go to C:\MODULE-FEDERATION-GIT-4\Angular-SideNav(My Local Folder Path)
Do the necessary codes changes

4.Build the angular/react app using 
ng build --output-path docs --base-href /Angular-SideNav/
(compliles the application into a docs folder) 

Now we can see the production ready files inside the /docs/ folder

4.Then Naviagte To
# GitHub -> Click On Repo -> Settings -> Pages(On The SidePane)

5.Select (main/master,whichever name you might have used for the default branch)
In my case,i changed my default branch name to master (by default it was main)

6.change output-path from the /root to /docs()
# Note
This is the reason we gave the output path as "docs" in step 4

7.Click on Save
Now the deployment process would have triggered automatically

8.Now under the "Deployments" section under "Code" tab,one can click on the links to see the status of the deployents

9.You can click on the "View Deployments"

10.In the Active Deployments u can see the url "https://experts-ui.github.io/Angular-SideNav/"

# Additional Steps For Host
11.In the webpack.config ,give the production ready urls and in all places where you want to pull the remote
(In this case,\src\app\app.component.ts)
and webconfig.json

ex:http://localhost:6002/sideNavBarRemote.js is changed 
to https://github.com/experts-ui/Angular-SideNav/Angular-SideNav/sideNavBarRemote.js

12.Again build the application and then re-deploy so that the changes will reflect



