import Image from "next/image";
import { Keyboard, Send } from "lucide-react";
import { sendMessageChatAction } from "../actions";
import MarketplaceShell from "../components/MarketplaceShell";
import SubmitButton from "../components/SubmitButton";

const contacts = [
  ["Meredith Gutkowski", "07.54 PM", "+5", "/images/avatar-1.png"],
  ["Shaun Konopelski", "", "", "/images/avatar-3.png", true],
  ["Carmen Addams", "05.40 AM", "+5", "/images/avatar-2.png"],
  ["Dwight Collins", "Yesterday", "+5", "/images/avatar-4.png"],
  ["Jennie Friz", "Yesterday", "+5", "/images/avatar-5.png"],
  ["Arturo Carter", "Yesterday", "+5", "/images/avatar-1.png"],
  ["Holly Schiller", "Yesterday", "+5", "/images/avatar-2.png"],
  ["Orville Jaskolski", "Yesterday", "+5", "/images/avatar-3.png"],
  ["Wanda Folkman", "Yesterday", "+5", "/images/avatar-4.png"],
];

export default async function ChatPage({ searchParams }) {
  const params = await Promise.resolve(searchParams);
  const sent = params?.sent === "success";

  return (
    <MarketplaceShell>
      <main className="bg-[#F0F2F8] px-[42px] py-[42px]">
        {sent && (
          <div className="mx-auto mb-6 max-w-[1356px] rounded-[16px] bg-[#FE7F2D] px-6 py-3 text-center text-[16px] font-semibold text-white">
            Pesan berhasil dikirim dan disimpan sebagai interaksi MVP.
          </div>
        )}

        <div className="mx-auto grid max-w-[1356px] grid-cols-[420px_1fr] gap-[42px]">
          <aside className="rounded-[20px] bg-white p-6">
            <h1 className="mb-8 text-[31px] font-semibold leading-[46px] text-[#08497A]">Inbox</h1>
            <div className="space-y-7">
              {contacts.map(([name, time, badge, avatar, active]) => (
                <div key={name} className="relative flex items-center gap-6">
                  <Image src={avatar} alt={name} width={50} height={50} className="h-[50px] w-[50px] rounded-full object-cover" />
                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-[16px] font-semibold leading-[24px] text-[#2F6586]">{name}</h2>
                    <p className="line-clamp-2 text-[10px] leading-[15px] text-[#4B95C3]">
                      Lorem ipsum dolor sit amet consectetur. Nec pharetra sed lectus id nisl congue gravida.
                    </p>
                  </div>
                  <div className="flex w-[50px] flex-col items-end gap-4 text-[10px] text-[#4B95C3]">
                    {time && <span>{time}</span>}
                    {badge && <span className="rounded-full bg-[#FE7F2D] px-2 py-1 font-semibold text-white">{badge}</span>}
                  </div>
                  {active && <span className="absolute -right-6 h-[62px] w-[17px] rounded-r-[20px] bg-[#FE7F2D]" />}
                </div>
              ))}
            </div>
          </aside>

          <section className="flex min-h-[860px] flex-col justify-between rounded-[20px] bg-white p-6">
            <div>
              <div className="mb-10 flex items-center gap-6">
                <Image src="/images/avatar-3.png" alt="Shaun Konopelski" width={60} height={60} className="h-[60px] w-[60px] rounded-full object-cover" />
                <div>
                  <div className="flex items-center gap-6">
                    <h2 className="text-[16px] font-semibold leading-[24px] text-[#2176B5]">Shaun Konopelski</h2>
                    <span className="text-[12px] text-[#2176B5]">4.5 (6)</span>
                  </div>
                  <p className="text-[12px] text-[#2176B5]">Kota Solo</p>
                  <div className="mt-2 flex items-center gap-2 text-[12px] text-[#2176B5]">
                    <span className="h-[15px] w-[15px] rounded-full bg-[#0DBA0D]" />
                    Online
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <ChatGroup side="left" />
                <ChatGroup side="right" />
                <ChatGroup side="left" short />
                <ChatGroup side="right" />
              </div>
            </div>

            <form action={sendMessageChatAction} className="mt-10 flex h-[57px] items-center justify-between gap-4 rounded-[20px] bg-[#7C7C7C]/20 px-5">
              <div className="flex flex-1 items-center gap-4">
                <Keyboard className="h-6 w-6 text-[#2176B5]" />
                <input
                  name="message"
                  placeholder="Ketik pesan . . ."
                  className="w-full bg-transparent text-[16px] text-[#08497A] outline-none placeholder:text-black/50"
                />
              </div>
              <SubmitButton pendingText="Mengirim..." className="flex h-10 w-10 items-center justify-center rounded-full text-[#2176B5]">
                <Send className="h-6 w-6" />
              </SubmitButton>
            </form>
          </section>
        </div>
      </main>
    </MarketplaceShell>
  );
}

function ChatGroup({ side, short = false }) {
  const mine = side === "right";
  const messages = short
    ? ["Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan sit ultrices quam vel id.", "Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan."]
    : [
        "Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan sit ultrices quam vel id.",
        "Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan.",
        "Lorem ipsum dolor sit amet consectetur.",
      ];

  return (
    <div className={`flex items-start gap-3 ${mine ? "justify-end" : "justify-start"}`}>
      {!mine && <Image src="/images/avatar-3.png" alt="Seller" width={43} height={43} className="h-[43px] w-[43px] rounded-full object-cover" />}
      <div className={`flex max-w-[620px] flex-col gap-2 ${mine ? "items-end" : "items-start"}`}>
        {messages.map((message, index) => (
          <p
            key={index}
            className={`rounded-[20px] px-4 py-[10px] text-[13px] leading-[20px] text-white ${mine ? "bg-[#2F6586]" : "bg-[#2176B5]"}`}
          >
            {message}
          </p>
        ))}
      </div>
      {mine && <Image src="/images/avatar-4.png" alt="Buyer" width={43} height={43} className="h-[43px] w-[43px] rounded-full object-cover" />}
    </div>
  );
}
