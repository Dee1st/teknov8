
with open(r"c:/Users/Will/Downloads/Teknov8/Teknov8/node_modules/vercel/dist/index.js", "r", encoding="utf-8") as f:
    content = f.read()
    index = content.find("User-Agent")
    if index != -1:
        print(f"Found at {index}")
        print(content[index-100:index+200])
    else:
        print("Not found 'User-Agent'")

    # Try lowercase
    index = content.find("user-agent")
    if index != -1:
        print(f"Found lowercase at {index}")
        print(content[index-100:index+200])
    
    # Try searching for the construction pattern
    # "vercel " + version
    index = content.find("vercel ")
    if index != -1:
        print(f"Found 'vercel ' at {index}")
        print(content[index:index+100])

