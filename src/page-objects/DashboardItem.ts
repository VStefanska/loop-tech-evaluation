import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class DashboardItem extends BasePage {

    readonly title: string;

    constructor(page: Page, title: string) {
        super(page);
        this.title = title;
    }

    get self() {
        return this.page.locator(`//div[contains(@class, "bg-white") and *[text()='${this.title}']]`)
    }

    get tags() {
        return this.self.locator('//div[contains(@class, "flex-wrap")]//span');
    }

    async getTags(): Promise<string[]> {
        const tags: string[] = [];
        for (const tag of await this.tags.all()) {
            tags.push(await tag.innerText());
        }
        return tags;
    }


}