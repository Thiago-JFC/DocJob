import { Controller, Get } from "@nestjs/common";

@Controller()
export class DocumentController {
    @Get('')
    getDocument() {
        return [
            {
                id: '1',
                title: 'How to prioritize the most important tasks',
                description: 'Lorem Ipsum',
                type: 'general routine'
            }
        ]
    }
}