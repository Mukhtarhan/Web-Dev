def count_substring(original_string, substring):
    occurrences = 0

    for i in range(len(original_string)):
        if original_string[i:i + len(substring)] == substring:
            occurrences += 1

    return occurrences


if __name__ == '__main__':
    string = input()
    sub_string = input()

    count = count_substring(string, sub_string)
    print(count)
