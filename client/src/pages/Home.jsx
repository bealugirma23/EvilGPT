import { useState } from "react";
import axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Home = () => {
  //for user input values
  const [inputValue, setInputValue] = useState("");
  //for chatlog values
  const [chatLog, setChatLog] = useState([]);
  //for checking GPT responded or not
  const [isLoading, setIsLoading] = useState(false);
  const [copy, setCpoy] = useState(false);

  const sendMessage = (message) => {
    const url = "https://freegptapi.hop.sh/neural/api";
    const params = {
      query: message,
    };

    setIsLoading(true);

    axios
      .get(url, { params })
      .then((response) => {
        const data = response.data;
        const adata = data.answer;

        const formateddata = adata.replace(/\\n/g, "\n");

        function Code(formateddata) {
          const codeStart = formateddata.indexOf("```");
          const codeEnd = formateddata.lastIndexOf("```");

          if (codeStart >= 0) {
            const codeResponse = formateddata
              .substring(codeStart + 3, codeEnd)
              .trim();
            return codeResponse;
          }
          return "";
        }

        const code = Code(formateddata);

        function noCode(formateddata) {
          const codeStart = formateddata.indexOf("```");
          const codeEnd = formateddata.lastIndexOf("```");

          if (codeStart !== -1 && codeEnd !== -1) {
            const textBefore = formateddata.substring(0, codeStart);
            const textAfter = formateddata.substring(codeEnd + 3); // +3 to exclude the "```"

            const result = textBefore + textAfter;
            return result;
          }
          return "";
        }
        const some = noCode(formateddata);

        setIsLoading(false);
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: some, code: code },
        ]);
        console.log("if their is a code ", code);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //Handles on click events of when Submit button is clicked it gives the user_value(inputValue) to gpt
  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };
  return (
    <div className="bg-black flex h-screen flex-col ">
      <div className="flex  flex-col mt-7 mb-9 ">
        {/* Headline banner */}
        <div className="justify-center  self-center flex w-screen  gap-2.5">
          <div className="flex">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a696443c-9582-4a16-8c0b-daaa233f010a?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
              className="aspect-[0.87] object-contain object-center w-[67px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-neutral-200 text-5xl font-bold leading-[59px] self-center grow whitespace-nowrap my-auto max-md:text-4xl max-md:leading-[54px]">
              EvilGPT
            </div>
          </div>
        </div>

        {/* <div className=" flex justify-center ">
          <div className="text-white  w-[781px]">
            <h3>The Bot can </h3>
            1. Help you with EF Core basics, such as creating models,
            configuring relationships, and performing CRUD operations. <br />
            2. Guide you on how to use EF Core migrations to manage database
            schema changes. <br />
            3. Show you how to use EF Core with different database providers,
            such as SQL Server, MySQL, and SQLite. <br />
            4. Assist you with advanced EF Core topics, such as querying with
            LINQ, using raw SQL queries, and optimizing performance. <br />
          </div>
        </div>  */}

        {/* Middle the response */}
        <div className="bg-black h-screen overflow-x-auto">
          {chatLog.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user"
                  ? "items-stretch border-b-[color:var(--color-border-light,#ACACB1)] bg-black self-stretch flex  gap-5 pl-14 pr-14 py-7 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5"
                  : "items-stretch border-b-[color:var(--color-border-light,#ACACB1)] self-stretch flex w-full  gap-5 px-14 py-7 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5"
              }`}
            >
              <div className=" w-9 shrink-0 max-w-full">
                <img
                  loading="lazy"
                  srcSet={`${
                    message.type === "user"
                      ? "https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/95f8bce7-63ea-41ee-be25-2e04eb17f807?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                      : "https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                  }`}
                  className="aspect-square  object-contain object-center w-9 justify-center items-center overflow-hidden "
                />
              </div>

              <div
                style={{ whiteSpace: "pre-line" }}
                className={`${
                  message.type === "user"
                    ? "text-white text-sm leading-6 tracking-wide grow shrink basis-auto self-start max-md:max-w-full"
                    : "text-white text-sm leading-6 tracking-wide grow shrink basis-auto max-md:max-w-ful"
                }    text-white`}
              >
                {message.message}
                {message.code && (
                  <div className=" flex place-items-center ">
                    <div className="max-w-3xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
                      <div className="flex justify-between px-4 p-1 text-white text-xs items-center">
                        <p className="text-sm"></p>
                        {copy ? (
                          <button className="py-1 inline-flex mt-1  items-center justify-center gap-1">
                            <span className="text-base ">
                              <img
                                className="w-4 h-4 flex  "
                                src="./clip.svg"
                              />
                            </span>
                            Copied
                          </button>
                        ) : (
                          <button
                            className="py-1 inline-flex mt-1  items-center justify-center gap-1"
                            onClick={() => setCpoy(true)}
                          >
                            <span className="text-base ">
                              <img
                                className="w-4 h-4 flex  "
                                src="./clip.svg"
                              />
                            </span>
                            Copy code
                          </button>
                        )}
                      </div>

                      <SyntaxHighlighter
                        language="csharp"
                        style={atomOneDark}
                        customStyle={{
                          padding: "25px",
                        }}
                      >
                        {message.code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="items-stretch border-b-[color:var(--color-border-light,#ACACB1)] self-stretch flex w-full  gap-5 px-14 py-7 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className=" w-9 shrink-0 max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f000975-a6c5-4426-b384-1d063ab67ec2?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                  className="aspect-square  object-contain object-center w-9 justify-center items-center overflow-hidden "
                />
              </div>
              <div className="text-white text-sm leading-6 tracking-wide grow shrink basis-auto max-md:max-w-ful">
                Loading
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <div className="flex items-center w-screen bg-black fixed bottom-0 justify-center">
          <div className=" flex-col mx-10 ">
            <form
              className="w-full flex justify-center items-center "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border w-full text-white border-[color:var(--color-border-light,#ACACB1)] shadow bg-black flex items-stretch justify-between gap-5  pl-3.5 pr-5 py-5 rounded-2xl border-solid max-md:max-w-full max-md:flex-wrap"
                placeholder="Send a message"
              ></input>
              <span>
                <button type="submit" className="pl-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ca5f00d-a556-4ad4-8550-a3529ce1bed5?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
                    className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full"
                  />
                </button>
              </span>
            </form>
            <div className="items-stretch flex justify-between gap-0 mt-4 max-md:max-w-full max-md:flex-wrap">
              <div className="justify-center text-neutral-700 text-center text-sm leading-6 tracking-wide grow shrink basis-auto max-md:max-w-full">
                Free Research Preview. ChatGPT may produce inaccurate
                information about people, places, or facts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
