import { BasePage } from "./BasePage";

export enum ProjectName {
    WEB_APPLICATION = 'Web Application',
    MOBILE_APPLICATION = 'Mobile Application',
    MARKETING_CAMPAIGN = 'Marketing Campaign'
}

export class ProjectNavigationMenu extends BasePage {

    project(projectName: ProjectName) {
        return this.page.locator(`//button[*[text()="${projectName}"]]`);
    }
}