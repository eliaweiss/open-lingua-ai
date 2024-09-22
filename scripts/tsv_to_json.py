import csv
import json

# Function to convert TSV to JSON

# Function to convert TSV to JSON and flush after each line


def count_rows(tsv_file):

    with open(tsv_file, 'r', encoding='utf-8') as file:
        reader = csv.reader(file, delimiter='\t')
        # print total number of rows
        print(f"Total rows: {sum(1 for _ in reader)}")

# Function to convert TSV to JSON and flush after each line


def tsv_to_json(tsv_file, json_file):
    # Open the JSON file and write the opening bracket
    with open(json_file, 'w', encoding='utf-8') as outfile:
        outfile.write("[\n")

    # Open and read the TSV file
    with open(tsv_file, 'r', encoding='utf-8') as file:
        reader = csv.reader(file, delimiter='\t')

        first = True
        for index, row in enumerate(reader):
            # Create a dictionary with the desired format for each row
            entry = {
                "pt-BR": row[1],
                "he-IL": row[3]
            }

            # Open the JSON file in append mode and write the dictionary
            with open(json_file, 'a', encoding='utf-8') as outfile:
                if not first:
                    # Add a comma before each new entry except the first
                    outfile.write(",\n")

                json.dump(entry, outfile, ensure_ascii=False)
                outfile.flush()  # Flush after every line
                print(f"Index: {index}, Entry: {entry}")
                # if index > 1000:
                #     break
            first = False

    # Write the closing bracket to complete the JSON array
    with open(json_file, 'a', encoding='utf-8') as outfile:
        outfile.write("\n]\n")


# Replace 'input.tsv' with your actual input TSV file and 'output.json' with your desired output JSON file name
tsv_file = '/Users/eliaweiss/Downloads/Sentence pairs in Portuguese-Hebrew - 2024-09-22.tsv'
json_file = '../public/data/tatoeba.he-IL.pt-BR.json'

# count_rows(tsv_file)
# Call the function to convert the TSV to JSON
tsv_to_json(tsv_file, json_file)

# print(
#     f"TSV file '{tsv_file}' has been converted to JSON and saved as '{json_file}'.")
