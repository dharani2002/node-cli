#!/usr/bin/env node


import { Command } from "commander";
import {compressFile, decompressFile} from "../src/fileCompression.js"
import {caseConversion, isPalindrome, wordCount} from "../src/stringManipulation.js"
import {jokeGenerator} from "../src/apiIntegration.js"

const program =new Command();

program
.version("1.0.0")
.description("CLI tool for everyday tasks");

// File Compression
program
    .command('compress <input> <output>')
    .description('Compress a file')
    .action(compressFile);

program
    .command('decompress <input> <output>')
    .description('Decompress a file')
    .action(decompressFile);

// String Manipulation
program
    .command('convert-case <input> <caseType>')
    .description('Convert text case (upper/lower)')
    .action((input, caseType) => {
        console.log(caseConversion(input, caseType));
    });

program
    .command('palindrome <input>')
    .description('Check if a string is a palindrome')
    .action((input) => {
        console.log(isPalindrome(input) ? 'It is a palindrome.' : 'Not a palindrome.');
    });

program
    .command('word-count <input>')
    .description('Count words in a string')
    .action((input) => {
        console.log(`Word count: ${wordCount(input)}`);
    });

program
    .command('joke')
    .description("Fetch a random joke")
    .action(jokeGenerator)

program.parse(process.argv)