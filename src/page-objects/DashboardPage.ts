import { BasePage } from "./BasePage";
import { DashboardItem } from "./DashboardItem";
import { ProjectNavigationMenu } from "./ProjectNavigationMenu";

export enum ColumnName {
    TO_DO = 'To Do',
    IN_PROGRESS = 'In Progress',
    REVIEW = 'Review',
    DONE = 'Done'
}

export class DashboardPage extends BasePage {

    get projectsMenu() {
        return new ProjectNavigationMenu(this.page);
    }

    column(columnName: ColumnName) {
        return this.page.locator(`//div[contains(@class, "flex-col") and *[text()="${columnName}"]]`)
    }

    dashboardItem(title: string) {
        return new DashboardItem(this.page, title);
    }
}