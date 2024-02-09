


# Дані про канал всі
``` javascript
const result = await client.invoke(
    new Api.channels.GetFullChannel({
      channel: "-1001633519155",
    })
  )
```
[Return](https://core.telegram.org/type/messages.ChatFull)
``` javascript
{
  CONSTRUCTOR_ID: 3856126364,
  SUBCLASS_OF_ID: 576344329,
  className: 'messages.ChatFull',
  classType: 'constructor',
  fullChat: {
    CONSTRUCTOR_ID: 1915758525,
    SUBCLASS_OF_ID: 3566872215,
    className: 'ChannelFull',
    classType: 'constructor',
    flags: 1350565903,
    canViewParticipants: true,
    canSetUsername: false,
    canSetStickers: false,
    hiddenPrehistory: false,
    canSetLocation: false,
    hasScheduled: false,
    canViewStats: false,
    blocked: false,
    flags2: 0,
    canDeleteChannel: false,
    antispam: false,
    participantsHidden: false,
    translationsDisabled: false,
    storiesPinnedAvailable: false,
    id: Integer { value: 1633519155n },
    about: '',
    participantsCount: 3,
    adminsCount: 3,
    kickedCount: 0,
    bannedCount: 0,
    onlineCount: null,
    readInboxMaxId: 14,
    readOutboxMaxId: 0,
    unreadCount: 0,
    chatPhoto: {
      CONSTRUCTOR_ID: 590459437,
      SUBCLASS_OF_ID: 3581324060,
      className: 'PhotoEmpty',
      classType: 'constructor',
      id: [Integer]
    },
    notifySettings: {
      CONSTRUCTOR_ID: 2573347852,
      SUBCLASS_OF_ID: 3475030132,
      className: 'PeerNotifySettings',
      classType: 'constructor',
      flags: 0,
      showPreviews: null,
      silent: null,
      muteUntil: null,
      iosSound: null,
      androidSound: null,
      otherSound: null,
      storiesMuted: null,
      storiesHideSender: null,
      storiesIosSound: null,
      storiesAndroidSound: null,
      storiesOtherSound: null
    },
    exportedInvite: {
      CONSTRUCTOR_ID: 179611673,
      SUBCLASS_OF_ID: 3027536472,
      className: 'ChatInviteExported',
      classType: 'constructor',
      flags: 32,
      revoked: false,
      permanent: true,
      requestNeeded: false,
      link: 'https://t.me/+oZVXW7dXs9s5ZDAy',
      adminId: [Integer],
      date: 1706290262,
      startDate: null,
      expireDate: null,
      usageLimit: null,
      usage: null,
      requested: null,
      title: null
    },
    botInfo: [ [Object] ],
    migratedFromChatId: null,
    migratedFromMaxId: null,
    pinnedMsgId: null,
    stickerset: null,
    availableMinId: null,
    folderId: null,
    linkedChatId: null,
    location: null,
    slowmodeSeconds: null,
    slowmodeNextSendDate: null,
    statsDc: null,
    pts: 15,
    call: null,
    ttlPeriod: null,
    pendingSuggestions: null,
    groupcallDefaultJoinAs: null,
    themeEmoticon: null,
    requestsPending: 1,
    recentRequesters: [ [Integer] ], //<------------- Тільки так дістати список хто хоче приєднатись
    defaultSendAs: null,
    availableReactions: {
      CONSTRUCTOR_ID: 1385335754,
      SUBCLASS_OF_ID: 320742581,
      className: 'ChatReactionsAll',
      classType: 'constructor',
      flags: 0,
      allowCustom: false
    },
    stories: null
  },
  chats: [
    {
      CONSTRUCTOR_ID: 427944574,
      SUBCLASS_OF_ID: 3316604308,
      className: 'Channel',
      classType: 'constructor',
      flags: 24608,
      creator: false,
      left: false,
      broadcast: true,
      verified: false,
      megagroup: false,
      restricted: false,
      signatures: false,
      min: false,
      scam: false,
      hasLink: false,
      hasGeo: false,
      slowmodeEnabled: false,
      callActive: false,
      callNotEmpty: false,
      fake: false,
      gigagroup: false,
      noforwards: false,
      joinToSend: false,
      joinRequest: false,
      forum: false,
      flags2: 12,
      storiesHidden: false,
      storiesHiddenMin: true,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      title: 'Test_bot',
      username: null,
      photo: [Object],
      date: 1707342108,
      restrictionReason: null,
      adminRights: [Object],
      bannedRights: null,
      defaultBannedRights: null,
      participantsCount: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    }
  ],
  users: [
    {
      CONSTRUCTOR_ID: 3948949285,
      SUBCLASS_OF_ID: 765557111,
      className: 'User',
      classType: 'constructor',
      flags: 33555551,
      self: true,
      contact: false,
      mutualContact: false,
      deleted: false,
      bot: false,
      botChatHistory: false,
      botNochats: false,
      verified: false,
      restricted: false,
      min: false,
      botInlineGeo: false,
      support: false,
      scam: false,
      applyMinPhoto: true,
      fake: false,
      botAttachMenu: false,
      premium: false,
      attachMenuEnabled: false,
      flags2: 16,
      botCanEdit: false,
      closeFriend: false,
      storiesHidden: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      firstName: 'С',
      lastName: 'Т',
      username: 'Definitely_Not_ABot',
      phone: '380960679863',
      photo: null,
      status: [Object],
      botInfoVersion: null,
      restrictionReason: null,
      botInlinePlaceholder: null,
      langCode: null,
      emojiStatus: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    },
    {
      CONSTRUCTOR_ID: 3948949285,
      SUBCLASS_OF_ID: 765557111,
      className: 'User',
      classType: 'constructor',
      flags: 33570827,
      self: false,
      contact: false,
      mutualContact: false,
      deleted: false,
      bot: true,
      botChatHistory: false,
      botNochats: false,
      verified: false,
      restricted: false,
      min: false,
      botInlineGeo: false,
      support: false,
      scam: false,
      applyMinPhoto: true,
      fake: false,
      botAttachMenu: false,
      premium: false,
      attachMenuEnabled: false,
      flags2: 16,
      botCanEdit: false,
      closeFriend: false,
      storiesHidden: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      firstName: 'TelePrint',
      lastName: null,
      username: 'PrintFB5Bot',
      phone: null,
      photo: null,
      status: null,
      botInfoVersion: 1,
      restrictionReason: null,
      botInlinePlaceholder: null,
      langCode: null,
      emojiStatus: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    },
    {
      CONSTRUCTOR_ID: 3948949285,
      SUBCLASS_OF_ID: 765557111,
      className: 'User',
      classType: 'constructor',
      flags: 1048643,
      self: false,
      contact: false,
      mutualContact: false,
      deleted: false,
      bot: false,
      botChatHistory: false,
      botNochats: false,
      verified: false,
      restricted: false,
      min: true,
      botInlineGeo: false,
      support: false,
      scam: false,
      applyMinPhoto: false,
      fake: false,
      botAttachMenu: false,
      premium: false,
      attachMenuEnabled: false,
      flags2: 16,
      botCanEdit: false,
      closeFriend: false,
      storiesHidden: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      firstName: 'Darvin',
      lastName: null,
      username: null,
      phone: null,
      photo: null,
      status: [Object],
      botInfoVersion: null,
      restrictionReason: null,
      botInlinePlaceholder: null,
      langCode: null,
      emojiStatus: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    }
  ]
}
```
# Дані про канал просто 
Отримати дані про канал якщо нема доступа то RPCError: 400: CHANNEL_PRIVATE

``` javascript
const result: Api.messages.TypeChats = await client.invoke(
    new Api.channels.GetChannels({
      id: ["-1001522015290"],
    })
  );
```
[Return](https://core.telegram.org/type/messages.Chats)
``` javascript
{
  CONSTRUCTOR_ID: 1694474197,    
  SUBCLASS_OF_ID: 2580925204,    
  className: 'messages.Chats',   
  classType: 'constructor',      
  chats: [
    {
      CONSTRUCTOR_ID: 427944574, 
      SUBCLASS_OF_ID: 3316604308,
      className: 'Channel',      
      classType: 'constructor',  
      flags: 24608,
      creator: false,
      left: false,
      broadcast: true,
      verified: false,
      megagroup: false,
      restricted: false,
      signatures: false,
      min: false,
      scam: false,
      hasLink: false,
      hasGeo: false,
      slowmodeEnabled: false,
      callActive: false,
      callNotEmpty: false,
      fake: false,
      gigagroup: false,
      noforwards: false,
      joinToSend: false,
      joinRequest: false,
      forum: false,
      flags2: 8,
      storiesHidden: false,
      storiesHiddenMin: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      title: 'Робота UA | Вакансії в Україні',
      username: null,
      photo: [Object],
      date: 1707339333,
      restrictionReason: null,
      adminRights: [Object],
      bannedRights: null,
      defaultBannedRights: null,
      participantsCount: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    }
  ]
}
```
# Кількість учасників канала

``` javascript
const result: Api.channels.TypeChannelParticipants = await client.invoke(
    new Api.channels.GetParticipants({
      channel: "-1001633519155",
      filter: new Api.ChannelParticipantsRecent(),
      offset: 0,
      limit: 100,
      hash: bigInt(2176980),
    })
  );
```

### filter

| Constructor |	Description|
|---| --- |
|channelParticipantsRecent |	Fetch only recent participants |
| channelParticipantsAdmins |	Fetch only admin participants |
| channelParticipantsKicked |	Fetch only kicked participants |
|channelParticipantsBots|	Fetch only bot participants|
|channelParticipantsBanned|	Fetch only banned participants|
|channelParticipantsSearch|	Query participants by name|
|channelParticipantsContacts|	Fetch only participants that are also contacts|
|channelParticipantsMentions|	This filter is used when looking for supergroup members to mention. This filter will automatically remove anonymous admins, and return even non-participant users that replied to a specific thread through the comment section of a channel.|

``` javascript
{
  CONSTRUCTOR_ID: 3222013888,
  SUBCLASS_OF_ID: 3653762072,
  className: 'ChannelParticipant',
  classType: 'constructor',
  userId: Integer { value: 5652252113n },
  date: 1707342264
}
```

# Отримати інформацію про учасника

``` javascript
  const result = await client.invoke(
    new Api.channels.GetParticipant({
      channel: "-1001633519155",
      participant: "5652252113",
    })
  );
```
``` javascript
{
  CONSTRUCTOR_ID: 3753378583,
  SUBCLASS_OF_ID: 1717048602,
  className: 'channels.ChannelParticipant',
  classType: 'constructor',
  participant: {
    CONSTRUCTOR_ID: 3222013888,
    SUBCLASS_OF_ID: 3653762072,
    className: 'ChannelParticipant',
    classType: 'constructor',
    userId: Integer { value: 5652252113n },
    date: 1707343509
  },
  chats: [],
  users: [
    {
      CONSTRUCTOR_ID: 3948949285,
      SUBCLASS_OF_ID: 765557111,
      className: 'User',
      classType: 'constructor',
      flags: 33554507,
      self: false,
      contact: false,
      mutualContact: false,
      deleted: false,
      bot: false,
      botChatHistory: false,
      botNochats: false,
      verified: false,
      restricted: false,
      min: false,
      botInlineGeo: false,
      support: false,
      scam: false,
      applyMinPhoto: true,
      fake: false,
      botAttachMenu: false,
      premium: false,
      attachMenuEnabled: false,
      flags2: 16,
      botCanEdit: false,
      closeFriend: false,
      storiesHidden: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      firstName: 'Darvin',
      lastName: null,
      username: 'daemontr',
      phone: null,
      photo: null,
      status: [Object],
      botInfoVersion: null,
      restrictionReason: null,
      botInlinePlaceholder: null,
      langCode: null,
      emojiStatus: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    }
  ]
}
```



# НЕ ВСЕ МОЖЕМО

## НЕМОЖЕМО Отримайте інформацію про користувачів, які приєдналися до чату за допомогою певного запрошення
Ви повинні бути адміністратором цього чату, щоб зробити це.
``` javascript
  const result: Api.messages.ChatInviteImporters = await client.invoke(
    new Api.messages.GetChatInviteImporters({
      peer: "-1001633519155",
      offsetDate: 0,
      offsetUser: "me",
      limit: 100,
      requested: true,
      link: "https://t.me/+rHe7qv-BmTkxOTk6",
      q: "",
    })
  );
  ```

## МОЖЕМО Отримайте інформацію про користувачів які хочуть приєднатись
Ви повинні бути адміністратором цього чату, щоб зробити це.
``` javascript
  const result: Api.messages.ChatInviteImporters = await client.invoke(
    new Api.messages.GetChatInviteImporters({
      peer: "-1001633519155",
      offsetDate: 0,
      offsetUser: "me",
      limit: 100,
      requested: true,
      link: "",
      q: "",
    })
  );
```
``` javascript
{
  CONSTRUCTOR_ID: 2176233482,
  SUBCLASS_OF_ID: 3653012134,
  className: 'messages.ChatInviteImporters',
  classType: 'constructor',
  count: 3930,
  importers: [
    {
      CONSTRUCTOR_ID: 2354765785,
      SUBCLASS_OF_ID: 1393710126,
      className: 'ChatInviteImporter',      
      classType: 'constructor',
      flags: 1,
      requested: true,
      viaChatlist: false,
      userId: [Integer],
      date: 1707393299,
      about: null,
      approvedBy: null
    }
  ],
  users: [
    {
      CONSTRUCTOR_ID: 3948949285,
      SUBCLASS_OF_ID: 765557111,
      className: 'User',
      classType: 'constructor',
      flags: 33554503,
      self: false,
      contact: false,
      mutualContact: false,
      deleted: false,
      bot: false,
      botChatHistory: false,
      botNochats: false,
      verified: false,
      restricted: false,
      min: false,
      botInlineGeo: false,
      support: false,
      scam: false,
      applyMinPhoto: true,
      fake: false,
      botAttachMenu: false,
      premium: false,
      attachMenuEnabled: false,
      flags2: 16,
      botCanEdit: false,
      closeFriend: false,
      storiesHidden: false,
      storiesUnavailable: true,
      id: [Integer],
      accessHash: [Integer],
      firstName: 'Serafim',
      lastName: '2248',
      username: null,
      phone: null,
      photo: null,
      status: [Object],
      botInfoVersion: null,
      restrictionReason: null,
      botInlinePlaceholder: null,
      langCode: null,
      emojiStatus: null,
      usernames: null,
      storiesMaxId: null,
      color: null,
      backgroundEmojiId: null
    }
  ]
}
```
