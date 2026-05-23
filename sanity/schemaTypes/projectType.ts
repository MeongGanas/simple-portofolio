import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "projects",
    title: "project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "thumbnail",
            type: "image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image_1",
            type: "image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image_2",
            type: "image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "core_code",
            type: "code",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "body",
            type: "array",
            of: [{ type: "block" }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "deploy_link",
            type: "string",
        }),
        defineField({
            name: "start_date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "finish_date",
            type: "date",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
    ],
});
