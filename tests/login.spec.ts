import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/page-objects/LoginPage";
import { getUser, UserRole, User } from "../src/auth/users.setup";
import { ColumnName, DashboardPage } from "../src/page-objects/DashboardPage";
import { ProjectName } from "../src/page-objects/ProjectNavigationMenu";

const testData = [
    {
        project: ProjectName.WEB_APPLICATION,
        column: ColumnName.TO_DO,
        dashboardItemTitle: 'Implement user authentication',
        dashboardItemTags: ['Feature', 'High Priority']
    },
    {
        project: ProjectName.WEB_APPLICATION,
        column: ColumnName.TO_DO,
        dashboardItemTitle: 'Fix navigation bug',
        dashboardItemTags: ['Bug']
    },
    {
        project: ProjectName.WEB_APPLICATION,
        column: ColumnName.IN_PROGRESS,
        dashboardItemTitle: 'Design system updates',
        dashboardItemTags: ['Design']
    },

    {
        project: ProjectName.MOBILE_APPLICATION,
        column: ColumnName.TO_DO,
        dashboardItemTitle: 'Push notification system',
        dashboardItemTags: ['Feature']
    },
    {
        project: ProjectName.MOBILE_APPLICATION,
        column: ColumnName.IN_PROGRESS,
        dashboardItemTitle: 'Offline mode',
        dashboardItemTags: ['Feature', 'High Priority']
    },
    {
        project: ProjectName.MOBILE_APPLICATION,
        column: ColumnName.DONE,
        dashboardItemTitle: 'App icon design',
        dashboardItemTags: ['Design']
    },
]

let admin: User;
let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test.beforeAll(async () => {
    admin = getUser(UserRole.ADMIN);
})
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.login(admin);
})

testData.forEach(data => {
    test(`verify dashboard item with title ${data.dashboardItemTitle} has ${data.dashboardItemTags} tags`, async () => {

        await dashboardPage.projectsMenu.project(data.project).click();
        await expect(dashboardPage.column(data.column)).toContainText(data.dashboardItemTitle);

        const dashboardItem = dashboardPage.dashboardItem(data.dashboardItemTitle);
        const dashboardItemTags: string[] = await dashboardItem.getTags();
        expect(dashboardItemTags).toEqual(data.dashboardItemTags);
    });
})