I have a source Excel workbook named Excel1.xlsx with a sheet called DataBook. Column A contains the device/AG identifier (examples: BKK0001-AG-01, NYC4321-AG-02); the AG name will change between files and must be preserved exactly. The remaining columns repeat the pair of headers Config and Rollback across the row, for example:

AG | Config | Rollback | Config | Rollback | Config | Rollback | ...

Headers may be present and are case-insensitive (config, Config, ROLLBACK, etc.), or the sheet might not have perfect header names but the pattern is still AG followed by alternating config/rollback values. Some files may have an extra final Config column (an unmatched Config without a subsequent Rollback).

Write a robust Python script that:

1. Reads Excel1.xlsx sheet DataBook using pandas (engine openpyxl).


2. Detects column layout either by header names (config / rollback, case-insensitive) or, if headers are ambiguous/missing, by assuming column A is AG and all remaining columns alternate Config / Rollback starting at column B.


3. Extracts every Config and every Rollback value (skipping empty cells) and writes them into a destination workbook Excel2.xlsx with exactly two sheets:

Sheet "Op.config" with columns ["AG", "Config"] — one row per Config value paired with its AG.

Sheet "Rollback" with columns ["AG", "Rollback"] — one row per Rollback value paired with its AG.



4. Preserves AG values exactly as they appear in column A (no trimming or modification).


5. Handles any number of repeated Config/Rollback pairs per AG row and supports a final unmatched Config.


6. Overwrites Excel2.xlsx (the output file should contain only the two sheets above). If Excel2.xlsx does not exist, create it.


7. Provides helpful error messages if the source file or sheet is missing or unreadable.


8. Uses only pandas and openpyxl (list required packages and the pip install command).


9. Includes at the top of the script a short usage example and at the end prints how many rows were written to each sheet.



Also include a short example in the output showing an input row and the resulting rows written to both sheets: