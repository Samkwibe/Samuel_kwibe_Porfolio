import React, { useEffect, useMemo, useState } from 'react'
import {
  Image,
  Linking,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { profile } from '../src/data/profile'
import { projects } from '../src/data/projects'
import { projectImageSource as sharedProjectImageSource } from '../src/data/projectImages'
import { testimonials, testimonialStats } from '../src/data/testimonials'
import {
  isMessageStoreConfigured,
  markContactMessageRead,
  saveContactMessage,
  subscribeToContactMessages
} from './src/messageStore'

const tabs = ['Home', 'Projects', 'Skills', 'Proof', 'Exp', 'Contact', 'Admin']
const tabScreens = {
  Home: 'Home',
  Projects: 'Projects',
  Skills: 'Skills',
  Proof: 'Testimonials',
  Exp: 'Experience',
  Contact: 'Contact',
  Admin: 'Admin'
}
const adminPin = process.env.EXPO_PUBLIC_ADMIN_PIN || '1234'
const profilePhoto = require('./assets/profile-graduation.png')

const projectImageUrls = {
  'skillrise': 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=85',
  'beacon-nh': 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=85',
  'cs330-computational-graphics': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=85',
  'food-waste-recipe-inventory': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85',
  'cs305-artemis-financial-security': 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=85',
  'employee-attrition-prediction': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
  'real-time-chatroom-svelte': 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=85',
  'zombie-shooter-csharp': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=85',
  'cs465-lab3': 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=85',
  'family-housing-hub': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  'quick-food-finder-app': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  'snhu-food-waste-tracking': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  'ai-roadmap-generator': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  'pathfinder-ai': 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
  'dry-beans-classifier': 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=1200&q=80',
  'cloud-cicd-pipeline': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  'oh-the-places-youve-been': 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
  'mobile-portfolio-app': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'
}

const localProjectImages = {
  'cs330-computational-graphics': require('./assets/cs330-graphics-01.png'),
  'food-waste-recipe-inventory': require('./assets/food-waste-dashboard.png')
}

const localProjectGalleries = {
  'cs330-computational-graphics': [
    require('./assets/cs330-graphics-01.png'),
    require('./assets/cs330-graphics-02.png'),
    require('./assets/cs330-graphics-03.png'),
    require('./assets/cs330-graphics-04.png'),
    require('./assets/cs330-graphics-05.png'),
    require('./assets/cs330-graphics-06.png'),
    require('./assets/cs330-graphics-07.png'),
    require('./assets/cs330-graphics-08.png'),
    require('./assets/cs330-graphics-09.png')
  ]
}

const categoryImageUrls = {
  'Mobile Application': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  'Android Mobile Application': 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80',
  'Full-Stack Web Application': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'Machine Learning': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80',
  'Cloud & DevOps': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  'Graphics & Visualization': 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=1200&q=80',
  'Software Security': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
  'Game Development': 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
  'Desktop Application': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  'Data Structures': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80',
  'Portfolio & Misc': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
}

const skillGroups = [
  { name: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'HTML', 'CSS'] },
  { name: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD', 'Kubernetes'] },
  { name: 'AI & Data', items: ['scikit-learn', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch'] },
  { name: 'Tools & Systems', items: ['Git', 'Linux', 'VS Code', 'Jupyter', 'PostgreSQL'] }
]

const experience = [
  {
    role: 'IT Front Desk Assistant',
    org: 'Southern New Hampshire University',
    period: 'Aug 2022 - Present',
    bullets: [
      'Provide IT support to 500+ students and faculty.',
      'Document technical issues and resolutions in ServiceNow.',
      'Troubleshoot macOS, Windows, and Linux systems.'
    ]
  },
  {
    role: 'Media Services Volunteer',
    org: 'Southern New Hampshire University',
    period: 'Aug 2022 - Present',
    bullets: [
      'Support faculty and students with media production tools.',
      'Manage live streaming and recording for university events.'
    ]
  },
  {
    role: 'Production Technician',
    org: 'Vibracoustic',
    period: 'May 2021 - Apr 2023',
    bullets: ['Assembled rubber and plastic automotive components.']
  }
]

const education = [
  {
    title: 'B.S. Computer Science',
    org: 'Southern New Hampshire University',
    detail: 'Focus: Cloud, AI/ML, Web Development'
  },
  {
    title: 'Pedagogy',
    org: 'Institut des Techniques Sociales et Administratives',
    detail: 'Teacher training'
  }
]

function openLink(url) {
  if (!url || url === '#') return
  Linking.openURL(url).catch(() => {})
}

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function projectImage(project) {
  return projectImageUrls[project.id] || categoryImageUrls[project.category] || sharedProjectImageSource(project)
}

function projectImageSource(project) {
  return localProjectImages[project.id] || { uri: projectImage(project) }
}

function projectGallerySources(project) {
  return localProjectGalleries[project.id] || [projectImageSource(project)]
}

function SectionTitle({ command, title, subtitle }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.command}>{'> '}{command}</Text>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  )
}

function IntroScreen({ onEnter }) {
  return (
    <LinearGradient
      colors={['#123f2a', '#07120e', '#050508']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.introRoot}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.introGlowTop} />
      <View style={styles.introGlowBottom} />

      <ScrollView contentContainerStyle={styles.introContent}>
        <View style={styles.introBadge}>
          <Text style={styles.introBadgeText}>SAMUEL KWIBE PORTFOLIO</Text>
        </View>

        <View style={styles.profileFrame}>
          <Image source={profilePhoto} style={styles.profilePhoto} resizeMode="cover" />
          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.55)']}
            style={styles.profilePhotoScrim}
          />
        </View>

        <Text style={styles.introKicker}>{'> welcome'}</Text>
        <Text style={styles.introTitle}>Hi, I'm Samuel.</Text>
        <Text style={styles.introSubtitle}>
          Computer Science student, full-stack and mobile developer, and builder of
          practical AI, cloud, and community-focused software.
        </Text>

        <View style={styles.introStats}>
          <View style={styles.introStat}>
            <Text style={styles.introStatValue}>25+</Text>
            <Text style={styles.introStatLabel}>Projects</Text>
          </View>
          <View style={styles.introStat}>
            <Text style={styles.introStatValue}>3.3</Text>
            <Text style={styles.introStatLabel}>GPA</Text>
          </View>
          <View style={styles.introStat}>
            <Text style={styles.introStatValue}>2026</Text>
            <Text style={styles.introStatLabel}>SNHU Grad</Text>
          </View>
        </View>

        <Pressable onPress={onEnter} style={styles.enterButton}>
          <Text style={styles.enterButtonText}>Enter Portfolio</Text>
        </Pressable>
      </ScrollView>
    </LinearGradient>
  )
}

function StatCard({ label, value, accent = 'green' }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, accent === 'cyan' && styles.cyanText]}>{value}</Text>
    </View>
  )
}

function Chip({ label, active, onPress, color = 'green' }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        active && (color === 'cyan' ? styles.chipActiveCyan : styles.chipActive)
      ]}
    >
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  )
}

function ProjectCard({ project, onPress }) {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <Pressable onPress={onPress} style={styles.projectCard}>
      <View style={styles.projectImagePlaceholder}>
        {imageFailed ? (
          <Text style={styles.projectInitials}>{initials(project.name)}</Text>
        ) : (
          <Image
            source={projectImageSource(project)}
            style={styles.projectImage}
            resizeMode="cover"
            onError={() => setImageFailed(true)}
          />
        )}
        <LinearGradient
          colors={['rgba(0,0,0,0.05)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.82)']}
          style={styles.imageScrim}
        />
        {project.featured ? <Text style={styles.featuredBadge}>FEATURED</Text> : null}
        <Text style={styles.imageTitle}>{project.year || 'Portfolio'}</Text>
      </View>
      <View style={styles.projectBody}>
        <Text style={styles.projectCategory}>{'> '}{project.category}</Text>
        <Text style={styles.cardTitle}>{project.name}</Text>
        <Text style={styles.bodyText} numberOfLines={4}>{project.summary}</Text>
      </View>
      <View style={styles.chipWrap}>
        {project.tech.slice(0, 4).map((tech) => (
          <View key={tech} style={styles.techPill}>
            <Text style={styles.techText}>{tech}</Text>
          </View>
        ))}
      </View>
    </Pressable>
  )
}

function HomeScreen({ goToProjects }) {
  const featured = projects.filter((project) => project.featured).slice(0, 6)

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <LinearGradient
        colors={['#123f2a', '#07120e', '#050508']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.heroCard}
      >
        <View style={styles.heroGlow} />
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>THE PORTFOLIO APP</Text>
        </View>
        <Text style={styles.command}>{'> whoami'}</Text>
        <Text style={styles.heroTitle}>Build. Learn.</Text>
        <Text style={styles.heroName}>Rise.</Text>
        <Text style={styles.heroSubtitle}>
          {profile.name} creates cloud apps, AI tools, mobile experiences, and
          community platforms that solve real problems.
        </Text>
        <View style={styles.heroActions}>
          <Pressable onPress={goToProjects} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Explore Work</Text>
          </Pressable>
          <Pressable onPress={() => openLink(`mailto:${profile.email}`)} style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Hire / Contact</Text>
          </Pressable>
        </View>
      </LinearGradient>

      <View style={styles.statsGrid}>
        <StatCard label="GPA" value="3.226" />
        <StatCard label="Projects" value={`${projects.length}+`} accent="cyan" />
        <StatCard label="Location" value="NH" />
      </View>

      <SectionTitle
        command="ls ./featured_work"
        title="Featured Work"
        subtitle="Swipe through the strongest projects from the portfolio."
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.featuredRail}>
        {featured.map((project) => (
          <View key={project.id} style={styles.featuredCard}>
            <ProjectCard project={project} onPress={goToProjects} />
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  )
}

function ProjectsScreen() {
  const [category, setCategory] = useState('All')
  const [year, setYear] = useState('All')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)
  const heroProject = projects.find((project) => project.id === 'skillrise') || projects.find((project) => project.featured) || projects[0]

  const categories = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [])
  const years = useMemo(() => ['All', ...new Set(projects.map((project) => project.year).filter(Boolean))], [])
  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase()

    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category
      const matchesYear = year === 'All' || project.year === year
      const searchableText = [
        project.name,
        project.category,
        project.summary,
        project.year,
        ...(project.tech || [])
      ].join(' ').toLowerCase()
      const matchesSearch = !query || searchableText.includes(query)

      return matchesCategory && matchesYear && matchesSearch
    }).sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
  }, [category, search, year])

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.screenContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator
      >
        <SectionTitle
          command="cd /portfolio/projects"
          title="Projects"
          subtitle={`${projects.length} projects across web, mobile, machine learning, cloud, and coursework.`}
        />

        {heroProject ? (
          <Pressable onPress={() => setSelected(heroProject)} style={styles.projectHeroCard}>
            <Image source={projectImageSource(heroProject)} style={styles.projectHeroImage} resizeMode="cover" />
            <LinearGradient
              colors={['rgba(0,0,0,0.08)', 'rgba(0,0,0,0.42)', 'rgba(5,5,8,0.96)']}
              style={styles.imageScrim}
            />
            <View style={styles.projectHeroContent}>
              <Text style={styles.testimonialRelation}>featured project</Text>
              <Text style={styles.projectHeroTitle}>{heroProject.name}</Text>
              <Text style={styles.projectHeroSummary}>{heroProject.summary}</Text>
            </View>
          </Pressable>
        ) : null}

        <View style={styles.statsGrid}>
          <StatCard label="Total" value={projects.length} />
          <StatCard label="Featured" value={projects.filter((project) => project.featured).length} accent="cyan" />
        </View>

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search projects, tech, or category"
          placeholderTextColor="#3f6f50"
          autoCapitalize="none"
          style={styles.searchInput}
        />

        <Text style={styles.filterLabel}>Category</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {categories.map((item) => (
            <Chip key={item} label={item} active={item === category} onPress={() => setCategory(item)} />
          ))}
        </ScrollView>

        <Text style={styles.filterLabel}>Year</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterRow}>
          {years.map((item) => (
            <Chip key={item} label={item} active={item === year} color="cyan" onPress={() => setYear(item)} />
          ))}
        </ScrollView>

        <Text style={styles.resultCount}>{filteredProjects.length} projects visible</Text>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onPress={() => setSelected(project)} />
        ))}
      </ScrollView>

      <Modal visible={Boolean(selected)} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView style={styles.modalRoot}>
          {selected ? (
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Pressable onPress={() => setSelected(null)} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
              <View style={styles.modalImageFrame}>
                <Image source={projectImageSource(selected)} style={styles.modalImage} resizeMode="cover" />
                <LinearGradient
                  colors={['rgba(0,0,0,0.08)', 'rgba(0,0,0,0.25)', 'rgba(0,0,0,0.88)']}
                  style={styles.imageScrim}
                />
                {selected.featured ? <Text style={styles.featuredBadge}>FEATURED</Text> : null}
              </View>
              <Text style={styles.projectCategory}>{selected.category}</Text>
              <Text style={styles.modalTitle}>{selected.name}</Text>
              <Text style={styles.bodyText}>{selected.description || selected.summary}</Text>

              {projectGallerySources(selected).length > 1 ? (
                <>
                  <Text style={styles.filterLabel}>Gallery</Text>
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.galleryRail}
                  >
                    {projectGallerySources(selected).map((source, index) => (
                      <View key={index} style={styles.galleryImageFrame}>
                        <Image source={source} style={styles.galleryImage} resizeMode="cover" />
                        <Text style={styles.galleryBadge}>{index + 1}</Text>
                      </View>
                    ))}
                  </ScrollView>
                </>
              ) : null}

              <Text style={styles.filterLabel}>Highlights</Text>
              {selected.highlights?.map((highlight) => (
                <Text key={highlight} style={styles.bullet}>{'> '}{highlight}</Text>
              ))}

              <Text style={styles.filterLabel}>Tech Stack</Text>
              <View style={styles.chipWrap}>
                {selected.tech.map((tech) => (
                  <View key={tech} style={styles.techPill}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.heroActions}>
                {selected.live && selected.live !== '#' ? (
                  <Pressable onPress={() => openLink(selected.live)} style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>Open Live</Text>
                  </Pressable>
                ) : null}
                {selected.code && selected.code !== '#' ? (
                  <Pressable onPress={() => openLink(selected.code)} style={styles.secondaryButton}>
                    <Text style={styles.secondaryButtonText}>Open Code</Text>
                  </Pressable>
                ) : null}
              </View>
            </ScrollView>
          ) : null}
        </SafeAreaView>
      </Modal>
    </>
  )
}

function SkillsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <SectionTitle
        command="source skills.sh"
        title="Technical Arsenal"
        subtitle="Tools, platforms, and languages used across the portfolio."
      />
      {skillGroups.map((group) => (
        <View key={group.name} style={styles.card}>
          <Text style={styles.cardTitle}>{group.name}</Text>
          <View style={styles.chipWrap}>
            {group.items.map((item) => (
              <View key={item} style={styles.techPill}>
                <Text style={styles.techText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

function TestimonialsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <LinearGradient
        colors={['#123f2a', '#07120e', '#050508']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.testimonialHero}
      >
        <Text style={styles.command}>{'> tail -f testimonials.log'}</Text>
        <Text style={styles.heroBadgeText}>PROOF OF WORK</Text>
        <Text style={styles.testimonialHeroTitle}>Trusted by students and teammates.</Text>
        <Text style={styles.heroSubtitle}>
          Feedback from IT support, academic teamwork, professional collaboration,
          and campus technical work.
        </Text>
      </LinearGradient>

      <View style={styles.statsGrid}>
        {testimonialStats.map((stat) => (
          <View key={stat.label} style={styles.statCard}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>{stat.value}</Text>
          </View>
        ))}
      </View>

      {testimonials.map((item) => (
        <View key={item.name} style={styles.testimonialCard}>
          <Text style={styles.testimonialRelation}>{item.relationship}</Text>
          <Text style={styles.quoteMark}>"</Text>
          <Text style={styles.testimonialQuote}>{item.quote}</Text>
          <View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.projectCategory}>{item.role}</Text>
          </View>
          <View style={styles.chipWrap}>
            {item.highlights.map((highlight) => (
              <View key={highlight} style={styles.techPill}>
                <Text style={styles.techText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

function ExperienceScreen() {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <SectionTitle
        command="tail -f experience.log"
        title="Experience"
        subtitle="Technical support, media services, production, and academic background."
      />
      {experience.map((item) => (
        <View key={`${item.role}-${item.org}`} style={styles.card}>
          <Text style={styles.cardTitle}>{item.role}</Text>
          <Text style={styles.projectCategory}>{item.org} // {item.period}</Text>
          {item.bullets.map((bullet) => (
            <Text key={bullet} style={styles.bullet}>{'> '}{bullet}</Text>
          ))}
        </View>
      ))}

      <SectionTitle command="cat education.txt" title="Education" />
      {education.map((item) => (
        <View key={item.title} style={styles.card}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.projectCategory}>{item.org}</Text>
          <Text style={styles.bodyText}>{item.detail}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

function ContactScreen() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [status, setStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  async function submit() {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('Please fill in your name, email, and message.')
      return
    }

    setIsSending(true)
    setStatus('')
    try {
      await saveContactMessage(form)
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 2500)
    } catch (error) {
      setStatus('Message could not be saved. Check Firebase settings and try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <SectionTitle
        command="cat contact.txt"
        title="Contact"
        subtitle="Send a message directly into Samuel's admin inbox."
      />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Direct Contact</Text>
        <Pressable onPress={() => openLink(`mailto:${profile.email}`)}>
          <Text style={styles.linkText}>{profile.email}</Text>
        </Pressable>
        <Pressable onPress={() => openLink(`tel:${profile.phone}`)}>
          <Text style={styles.linkText}>{profile.phone}</Text>
        </Pressable>
        <Text style={styles.bodyText}>{profile.location}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Social Links</Text>
        <Pressable onPress={() => openLink(profile.github)}>
          <Text style={styles.linkText}>GitHub: Samkwibe</Text>
        </Pressable>
        <Pressable onPress={() => openLink(profile.linkedin)}>
          <Text style={styles.linkText}>LinkedIn: Samuel Kwibe</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Say hello</Text>
        {sent ? (
          <Text style={styles.successText}>[MESSAGE SAVED TO INBOX]</Text>
        ) : (
          <>
            <TextInput
              value={form.name}
              onChangeText={(name) => setForm((current) => ({ ...current, name }))}
              placeholder="Name"
              placeholderTextColor="#3f6f50"
              style={styles.input}
            />
            <TextInput
              value={form.email}
              onChangeText={(email) => setForm((current) => ({ ...current, email }))}
              placeholder="Email"
              placeholderTextColor="#3f6f50"
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />
            <TextInput
              value={form.message}
              onChangeText={(message) => setForm((current) => ({ ...current, message }))}
              placeholder="Message"
              placeholderTextColor="#3f6f50"
              multiline
              style={[styles.input, styles.messageInput]}
            />
            {status ? <Text style={styles.errorText}>{status}</Text> : null}
            <Pressable onPress={submit} style={[styles.primaryButton, isSending && styles.buttonDisabled]}>
              <Text style={styles.primaryButtonText}>{isSending ? 'Sending...' : 'Send Message'}</Text>
            </Pressable>
          </>
        )}
      </View>
    </ScrollView>
  )
}

function AdminScreen() {
  const [pin, setPin] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    if (!unlocked) return undefined

    setStatus('Loading inbox...')
    return subscribeToContactMessages(
      (nextMessages) => {
        setMessages(nextMessages)
        setStatus('')
      },
      () => setStatus('Could not load messages. Check Firebase permissions.')
    )
  }, [unlocked])

  function unlock() {
    if (pin === adminPin) {
      setUnlocked(true)
      setStatus('')
      return
    }
    setStatus('Wrong admin PIN.')
  }

  async function markRead(messageId) {
    try {
      await markContactMessageRead(messageId)
    } catch (error) {
      setStatus('Could not update this message.')
    }
  }

  if (!unlocked) {
    return (
      <ScrollView contentContainerStyle={styles.screenContent}>
        <SectionTitle
          command="sudo inbox"
          title="Admin Inbox"
          subtitle="Enter your admin PIN to view messages sent from the contact form."
        />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Private Access</Text>
          <Text style={styles.bodyText}>
            Demo PIN is 1234 unless you set EXPO_PUBLIC_ADMIN_PIN in mobile/.env.
          </Text>
          <TextInput
            value={pin}
            onChangeText={setPin}
            placeholder="Admin PIN"
            placeholderTextColor="#3f6f50"
            keyboardType="number-pad"
            secureTextEntry
            style={styles.input}
          />
          {status ? <Text style={styles.errorText}>{status}</Text> : null}
          <Pressable onPress={unlock} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Unlock Inbox</Text>
          </Pressable>
        </View>
      </ScrollView>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <SectionTitle
        command="tail -f contactMessages"
        title="Admin Inbox"
        subtitle={isMessageStoreConfigured()
          ? 'Live messages from Firebase Firestore.'
          : 'Demo inbox only. Add Firebase env vars to receive messages from real devices.'}
      />

      <View style={styles.statsGrid}>
        <StatCard label="Messages" value={messages.length} />
        <StatCard label="New" value={messages.filter((message) => message.status !== 'read').length} accent="cyan" />
      </View>

      {status ? <Text style={styles.errorText}>{status}</Text> : null}

      {messages.length === 0 ? (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>No messages yet</Text>
          <Text style={styles.bodyText}>
            Send a test message from the Contact tab and it will appear here.
          </Text>
        </View>
      ) : null}

      {messages.map((message) => (
        <View key={message.id} style={styles.messageCard}>
          <View style={styles.messageHeader}>
            <Text style={styles.messageName}>{message.name || 'Unknown sender'}</Text>
            <Text style={[styles.messageStatus, message.status !== 'read' && styles.messageStatusNew]}>
              {message.status === 'read' ? 'READ' : 'NEW'}
            </Text>
          </View>
          <Pressable onPress={() => openLink(`mailto:${message.email}`)}>
            <Text style={styles.linkText}>{message.email}</Text>
          </Pressable>
          <Text style={styles.messageDate}>{message.createdAtLabel || 'Just now'}</Text>
          <Text style={styles.messageBody}>{message.message}</Text>
          {message.status !== 'read' ? (
            <Pressable onPress={() => markRead(message.id)} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Mark Read</Text>
            </Pressable>
          ) : null}
        </View>
      ))}
    </ScrollView>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Home')
  const [hasEntered, setHasEntered] = useState(false)

  if (!hasEntered) {
    return <IntroScreen onEnter={() => setHasEntered(true)} />
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topBar}>
        <Text style={styles.brand}>root@samuel.pro_</Text>
        <Text style={styles.topBarMeta}>NET: SECURE</Text>
      </View>

      <View style={styles.content}>
        {tabScreens[activeTab] === 'Home' ? <HomeScreen goToProjects={() => setActiveTab('Projects')} /> : null}
        {tabScreens[activeTab] === 'Projects' ? <ProjectsScreen /> : null}
        {tabScreens[activeTab] === 'Skills' ? <SkillsScreen /> : null}
        {tabScreens[activeTab] === 'Testimonials' ? <TestimonialsScreen /> : null}
        {tabScreens[activeTab] === 'Experience' ? <ExperienceScreen /> : null}
        {tabScreens[activeTab] === 'Contact' ? <ContactScreen /> : null}
        {tabScreens[activeTab] === 'Admin' ? <AdminScreen /> : null}
      </View>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  )
}

const colors = {
  bg: '#050508',
  panel: '#0a0a0e',
  panelDark: '#020204',
  green: '#4ade80',
  greenDeep: '#153f2b',
  cyan: '#22d3ee',
  purple: '#8b5cf6',
  text: '#f8fafc',
  muted: '#94a3b8',
  border: 'rgba(74, 222, 128, 0.25)'
}

const styles = StyleSheet.create({
  introRoot: {
    flex: 1
  },
  introGlowTop: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: 'rgba(74, 222, 128, 0.16)',
    right: -120,
    top: -100
  },
  introGlowBottom: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(34, 211, 238, 0.12)',
    left: -100,
    bottom: -90
  },
  introContent: {
    flexGrow: 1,
    padding: 22,
    paddingTop: 64,
    paddingBottom: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  introBadge: {
    borderColor: 'rgba(74, 222, 128, 0.4)',
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 8,
    marginBottom: 18
  },
  introBadgeText: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1
  },
  profileFrame: {
    width: 250,
    height: 250,
    borderRadius: 36,
    borderColor: 'rgba(74, 222, 128, 0.5)',
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#000',
    marginBottom: 24,
    shadowColor: colors.green,
    shadowOpacity: 0.35,
    shadowRadius: 28,
    shadowOffset: { width: 0, height: 12 }
  },
  profilePhoto: {
    width: '100%',
    height: '100%'
  },
  profilePhotoScrim: {
    ...StyleSheet.absoluteFillObject
  },
  introKicker: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 13,
    marginBottom: 8
  },
  introTitle: {
    color: colors.text,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: -1.4,
    textAlign: 'center'
  },
  introSubtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 12,
    maxWidth: 340
  },
  introStats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
    width: '100%'
  },
  introStat: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    borderRadius: 18,
    padding: 14,
    alignItems: 'center'
  },
  introStatValue: {
    color: colors.green,
    fontSize: 24,
    fontWeight: '900'
  },
  introStatLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 4,
    textTransform: 'uppercase'
  },
  enterButton: {
    backgroundColor: colors.green,
    borderRadius: 18,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: colors.green,
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 }
  },
  enterButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0.5
  },
  root: {
    flex: 1,
    backgroundColor: colors.bg
  },
  topBar: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.panelDark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  brand: {
    color: colors.green,
    fontFamily: 'Courier',
    fontWeight: '700'
  },
  topBarMeta: {
    color: colors.cyan,
    fontFamily: 'Courier',
    fontSize: 11
  },
  content: {
    flex: 1
  },
  screenContent: {
    padding: 16,
    paddingBottom: 34,
    gap: 16
  },
  featuredRail: {
    gap: 14,
    paddingRight: 16
  },
  featuredCard: {
    width: 300
  },
  sectionHeader: {
    marginBottom: 4
  },
  command: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 13,
    marginBottom: 8
  },
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -1,
    marginBottom: 8
  },
  subtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22
  },
  heroCard: {
    borderColor: colors.border,
    borderWidth: 1,
    padding: 20,
    minHeight: 390,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 28,
    shadowColor: colors.green,
    shadowOpacity: 0.28,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 14 }
  },
  heroGlow: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(74, 222, 128, 0.14)',
    right: -80,
    top: -70
  },
  heroBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(74, 222, 128, 0.12)',
    borderColor: 'rgba(74, 222, 128, 0.35)',
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 999,
    marginBottom: 18
  },
  heroBadgeText: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1
  },
  heroTitle: {
    color: colors.text,
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: -1.5
  },
  heroName: {
    color: colors.green,
    fontSize: 62,
    fontWeight: '900',
    marginBottom: 18,
    letterSpacing: -2
  },
  heroSubtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24
  },
  heroActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 20
  },
  primaryButton: {
    backgroundColor: colors.green,
    paddingHorizontal: 18,
    paddingVertical: 13,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 130,
    borderRadius: 14,
    shadowColor: colors.green,
    shadowOpacity: 0.45,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 }
  },
  buttonDisabled: {
    opacity: 0.6
  },
  primaryButtonText: {
    color: '#000',
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: 12
  },
  secondaryButton: {
    borderColor: colors.green,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 130,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.35)'
  },
  secondaryButtonText: {
    color: colors.green,
    fontWeight: '800',
    textTransform: 'uppercase',
    fontSize: 12
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 14,
    borderRadius: 18
  },
  statLabel: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 11,
    textTransform: 'uppercase',
    marginBottom: 6
  },
  statValue: {
    color: colors.green,
    fontSize: 24,
    fontWeight: '900'
  },
  cyanText: {
    color: colors.cyan
  },
  card: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    padding: 18,
    gap: 10,
    borderRadius: 24
  },
  testimonialHero: {
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 28,
    padding: 20,
    gap: 10,
    overflow: 'hidden'
  },
  testimonialHeroTitle: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
    lineHeight: 39
  },
  testimonialCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 26,
    padding: 18,
    gap: 12,
    overflow: 'hidden'
  },
  testimonialRelation: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  quoteMark: {
    position: 'absolute',
    right: 18,
    top: 12,
    color: 'rgba(74, 222, 128, 0.18)',
    fontSize: 70,
    fontWeight: '900'
  },
  testimonialQuote: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    marginRight: 18
  },
  projectCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 28,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 }
  },
  projectHeroCard: {
    height: 360,
    borderRadius: 30,
    borderColor: colors.border,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#000',
    justifyContent: 'flex-end'
  },
  projectHeroImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%'
  },
  projectHeroContent: {
    padding: 20,
    gap: 9
  },
  projectHeroTitle: {
    color: colors.text,
    fontSize: 31,
    fontWeight: '900',
    letterSpacing: -0.8
  },
  projectHeroSummary: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21
  },
  projectImagePlaceholder: {
    height: 210,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    overflow: 'hidden'
  },
  projectImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%'
  },
  imageScrim: {
    ...StyleSheet.absoluteFillObject,
  },
  projectBody: {
    paddingTop: 3
  },
  imageTitle: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    color: colors.text,
    fontFamily: 'Courier',
    fontSize: 12,
    fontWeight: '800',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    borderColor: colors.border,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    overflow: 'hidden',
    borderRadius: 999
  },
  projectInitials: {
    color: colors.green,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 3
  },
  featuredBadge: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: colors.green,
    borderColor: colors.green,
    borderWidth: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 10,
    fontWeight: '800',
    overflow: 'hidden',
    borderRadius: 999
  },
  projectCategory: {
    color: colors.cyan,
    fontFamily: 'Courier',
    fontSize: 12,
    marginTop: 14,
    marginHorizontal: 16,
    textTransform: 'uppercase'
  },
  cardTitle: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
    marginHorizontal: 16,
    marginTop: 6
  },
  bodyText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginHorizontal: 16,
    marginTop: 8
  },
  bullet: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 13,
    lineHeight: 20,
    marginHorizontal: 16
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    margin: 16,
    marginTop: 12
  },
  techPill: {
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 999
  },
  techText: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 11
  },
  filterLabel: {
    color: colors.muted,
    fontFamily: 'Courier',
    textTransform: 'uppercase',
    fontSize: 12,
    marginTop: 8
  },
  filterRow: {
    marginBottom: 4
  },
  searchInput: {
    color: colors.green,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: '#000',
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontFamily: 'Courier',
    borderRadius: 16
  },
  resultCount: {
    color: colors.cyan,
    fontFamily: 'Courier',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  chip: {
    borderColor: '#1f2937',
    borderWidth: 1,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 999
  },
  chipActive: {
    backgroundColor: colors.green,
    borderColor: colors.green
  },
  chipActiveCyan: {
    backgroundColor: colors.cyan,
    borderColor: colors.cyan
  },
  chipText: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 12,
    fontWeight: '700'
  },
  chipTextActive: {
    color: '#000'
  },
  modalRoot: {
    flex: 1,
    backgroundColor: colors.bg
  },
  modalContent: {
    padding: 16,
    paddingBottom: 40
  },
  modalImageFrame: {
    height: 280,
    backgroundColor: '#000',
    borderColor: colors.border,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 12,
    borderRadius: 28
  },
  modalImage: {
    width: '100%',
    height: '100%'
  },
  galleryRail: {
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  galleryImageFrame: {
    width: 250,
    height: 150,
    backgroundColor: '#000',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 18,
    overflow: 'hidden'
  },
  galleryImage: {
    width: '100%',
    height: '100%'
  },
  galleryBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    color: colors.green,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontSize: 11,
    fontWeight: '900'
  },
  closeButton: {
    alignSelf: 'flex-end',
    borderColor: colors.green,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 16
  },
  closeButtonText: {
    color: colors.green,
    fontWeight: '800'
  },
  modalTitle: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
    marginHorizontal: 16,
    marginTop: 8
  },
  linkText: {
    color: colors.green,
    fontSize: 15,
    marginHorizontal: 16,
    marginTop: 8
  },
  input: {
    color: colors.green,
    borderColor: colors.border,
    borderWidth: 1,
    backgroundColor: '#000',
    padding: 14,
    marginHorizontal: 16,
    marginTop: 10,
    fontFamily: 'Courier',
    borderRadius: 14
  },
  messageInput: {
    minHeight: 120,
    textAlignVertical: 'top'
  },
  successText: {
    color: colors.green,
    fontFamily: 'Courier',
    fontSize: 16,
    fontWeight: '800',
    marginHorizontal: 16,
    marginVertical: 24
  },
  errorText: {
    color: '#fca5a5',
    fontFamily: 'Courier',
    fontSize: 12,
    lineHeight: 18,
    marginHorizontal: 16,
    marginTop: 8
  },
  messageCard: {
    backgroundColor: colors.panel,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 10
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  messageName: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
    flex: 1
  },
  messageStatus: {
    color: colors.muted,
    borderColor: '#334155',
    borderWidth: 1,
    borderRadius: 999,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 10,
    fontWeight: '900'
  },
  messageStatusNew: {
    color: colors.green,
    borderColor: colors.green,
    backgroundColor: 'rgba(74, 222, 128, 0.1)'
  },
  messageDate: {
    color: colors.muted,
    fontFamily: 'Courier',
    fontSize: 11,
    marginHorizontal: 16
  },
  messageBody: {
    color: colors.text,
    fontSize: 15,
    lineHeight: 22,
    marginHorizontal: 16,
    marginTop: 4
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: colors.border,
    borderTopWidth: 1,
    backgroundColor: colors.panelDark,
    paddingHorizontal: 4,
    paddingTop: 10,
    paddingBottom: 14
  },
  tabItem: {
    flex: 1,
    minHeight: 44,
    paddingVertical: 11,
    paddingHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 12
  },
  tabItemActive: {
    borderColor: colors.green,
    backgroundColor: 'rgba(74, 222, 128, 0.1)'
  },
  tabText: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: -0.2
  },
  tabTextActive: {
    color: colors.green
  }
})
